<template>
  <div id='blogs'>
    <img src="../../assets/logo.png">
    {{ msg }}

    <form v-on:submit='addBlog' class='blog-form'>
      <input type='text' v-model='title' placehoder='Enter Title'>
      <input type='text' v-model='summary' placehoder='Enter Summary'>
      <input type='text' v-model='blurb' placehoder='Enter Blurb'>
      <input type='text' v-model='img' placehoder='Enter Img Url'>
      <input type='submit' value='Submit'>
      <p v-if='error'>{{ error }}</p>
    </form>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { createBlog } from '../../backend/controllers/controllers';
  import * as Interfaces from '../../backend/interface_tests';

  @Component({})
  export default class BlogComponent extends Vue {
    name : string = 'blogs';

    // Blog Keys
    title   : string = '';
    summary : string = '';
    blurb   : string =  '';
    img     : string = '';

    // Error
    msg   : string = 'Welcome to Blogs.';

    addBlog(e : any) : void {
      e.preventDefault();

      const blogData : Interfaces.Blog = {
        title: this.title,
        summary: this.summary,
        blurb: this.blurb,
        img: this.img,
        dateCreated: 0,
        dateUpdated: 0,
      }

      const check = createBlog(blogData);
      this.checkForErrors(check);
    }

    checkForErrors(check : string) : void {
      if (check.length > 0) {
        this.msg = `${ check }`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  #blogs, .blog-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .blog-form {
    background: #ccc;
    color: #fff;
    margin: 10px;
  }
</style>

