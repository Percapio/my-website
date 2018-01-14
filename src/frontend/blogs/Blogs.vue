<template>
  <div id='blogs'>
    <img src="../../assets/logo.png">
    {{ msg }}

    <section class='blog-body'>
      <div class='form-container'>
        <p v-if='blogFetched'>{{ dateCreated }}<p>
        <form v-on:submit='handleBlog' class='blog-form'>
          <input type='text' v-model='title' placeholder='Enter Title'>
          <textarea type='text' v-model='description' placeholder='Enter Description'/>
          <input type='text' v-model='blurb' placeholder='Enter Blurb'>
          <input type='text' v-model='img' placeholder='Enter Img Url'>
          <input type='submit' value='Submit or Update'>
        </form>
        <input type='text' v-model='blogId' placeholder='Enter Id'>
        <div class='buttons'>
          <button @click='removeBlog'>Delete a blog</button>
          <button @click='getBlog'>Grab a blog</button>
        </div>
      </div>
      <aside>
        <ul class='blog-items' v-if='filled'>
          <h4>Blogs to be listed:</h4>
          <li v-for='blog in blogs'>
            <p>key: {{ blog[0] }}</p>
            <p>{{ blog[1].title }}</p>
            <p>{{ blog[1].img }}</p>
            <p>{{ blog[1].blurb }}</p>
            <p>{{ blog[1].dateCreated }}</p>
          </li>
        </ul>
      </aside>
    </section>
  </div>
</template>

<script lang='ts'>
        // <button @click='renderBlogs'>Push For Blogs</button>
  import { Vue, Component } from 'vue-property-decorator';
  import * as Interfaces from '../../backend/interface_tests';
  import { findAllCheck, addItemCheck } from '../errorhandlers';
  import { 
    createBlog,
    getAllBlogs,
    showBlog,
    patchBlog,
    destroyBlog,
  } from '../../backend/controllers/controllers';

  @Component({})
  export default class BlogComponent extends Vue {
    name    : string = 'blogs';
    msg     : string = 'Welcome to Blogs.';
    blogs   : any;
    blogId  : string = '';
    oneBlog : Array<any> = [];

    // Blog Keys
    title       : string = '';
    description : string = '';
    blurb       : string = '';
    img         : string = '';
    dateCreated : number = 0;

    // Rendering
    filled      : boolean = false;
    blogFetched : boolean = false;

    mounted() {
      // Initial mounting of the component
      this.blogs = getAllBlogs( this.updateBlogList.bind(this) );
    }

    updateBlogList(newBlogs : Array<any>) {
      // Variable that needs updating
      this.blogs  = newBlogs;

      // Always have a way to render errors
      let noErrors = findAllCheck(this.blogs, this.msg);

      // Render the variable once updated
      if (noErrors) {
        this.filled = true; 
      }
    }

    // Methods
    handleBlog(e : any) : void {
      e.preventDefault();
      
      if (this.dateCreated === 0) {
        this.addBlog();
      } else {
        if (this.blogId.length === 0) {
          this.msg = 'please, input blog id first'
        } else {
          this.changeBlog();
        }
      }
    }

    addBlog() : void {
      const blogData : Interfaces.Blog = {
        title: this.title,
        description: this.description,
        blurb: this.blurb,
        img: this.img,
        dateCreated: 0,
        dateUpdated: 0,
      }

      const check = createBlog(blogData);
      addItemCheck(check, this.msg);
    }

    getBlog() : void {
      showBlog(this.blogId, this.grabBlog.bind(this));
    }

    grabBlog(newBlog : Array<any>) {
      console.log(this.oneBlog);
      for (let i=0; i < newBlog.length; i++) {
        switch (newBlog[i][0]) {
          case 'title':
            this.title = newBlog[i][1];
            continue;
          case 'description':
            this.description = newBlog[i][1];
            continue;
          case 'blurb':
            this.blurb = newBlog[i][1];
            continue;
          case 'img':
            this.img = newBlog[i][1];
            continue;
          case 'dateCreated':
            this.dateCreated = newBlog[i][1];
            continue;
        }
      }
      this.blogFetched = true;
    }

    changeBlog() {
      const blogData : Interfaces.Blog = {
        title: this.title,
        description: this.description,
        blurb: this.blurb,
        img: this.img,
        dateCreated: this.dateCreated,
        dateUpdated: Date.now(),
      }

      const check = patchBlog(this.blogId, blogData);
      addItemCheck(check, this.msg);     
    }

    removeBlog(e : any) : void {
      e.preventDefault();
      
      destroyBlog(this.blogId);
      this.blogs = getAllBlogs( this.updateBlogList.bind(this) );
      this.msg = `${ this.blogId } is deleted.`
    }
  };
</script>

<style lang="scss" scoped>
  #blogs, .blog-body, .blog-form, aside, .blog-items,
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #blogs, .blog-form, .blog-items, .form-container {
    flex-direction: column;
  }

  .blog-form {
    background: #ccc;
    color: #fff;
    margin: 10px;

    textarea {
      resize: none;
    }
  }

  input, textarea {
    text-align: center;
  }
</style>

