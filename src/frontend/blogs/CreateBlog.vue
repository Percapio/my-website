<template>
    <h3 v-cloak>{{ title }}</h3>
    <section class='blog-body'>
      <div class='form-container'>
        <p v-show='blogFetched'>{{ dateCreated }}<p>
        <p v-show='blogFetched'>{{ blogId }}<p>
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
        <ul class='blog-items' v-show='filled'>
          <h4>Blogs to be listed:</h4>
          <li v-for='(blog, index) in blogs'>
            <p>{{ index }}: {{ blog[0] }}</p>
            <p>{{ blog[1].data.title }}</p>
            <p>{{ blog[1].data.img }}</p>
            <p>{{ blog[1].data.blurb }}</p>
            <p>{{ blog[1].data.dateCreated }}</p>
          </li>
        </ul>
      </aside>
    </section>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { findAllCheck, addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  @Component({})
  export default class BlogComponent extends Vue {
    name    : string      = 'blogs';
    msg     : string      = 'Welcome to Blogs.';
    blogId  : string      = '';
    oneBlog : Array<any>  = [];
    blogs   : any;

    // Blog Keys
    title       : string = '';
    description : string = '';
    blurb       : string = '';
    img         : string = '';
    dateCreated : number = 0;

    // Rendering
    filled      : boolean = false;
    blogFetched : boolean = false;

    // mounted() : void {
    //   Controllers.getAllBlogs( this.updateBlogList.bind(this) );
    // }

    updateBlogList(newBlogs : Array<any>) : void {
      this.blogs  = newBlogs;
      let noErrors = findAllCheck(this.blogs, this.msg);
      this.filled = noErrors ? true : false;
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

      const check = Controllers.createBlog(blogData);
      addItemCheck(check, this.msg);
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

      const check = Controllers.patchBlog(this.blogId, blogData);
      addItemCheck(check, this.msg);     
    }

    getBlog() : void {
      Controllers.showBlog(this.blogId, this.grabBlog.bind(this));
    }

    grabBlog(newBlog : Array<any>) {
      this.title        = newBlog[0].title;
      this.description  = newBlog[0].description;
      this.blurb        = newBlog[0].blurb;
      this.img          = newBlog[0].img;
      this.dateCreated  = newBlog[0].dateCreated;

      this.blogFetched = true;
    }

    removeBlog(e : any) : void {
      e.preventDefault();
      
      Controllers.destroyBlog(this.blogId);
      this.blogs = Controllers.getAllBlogs( this.updateBlogList.bind(this) );
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