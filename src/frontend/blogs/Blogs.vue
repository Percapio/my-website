<template>
  <div id='blogs'>
    {{ msg }}
  </div>
</template>

<script lang='ts'>
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class BlogComponent extends Vue {
    name    : string      = 'blogs';
    msg     : string      = 'Here is a blog.';
  }
</script>

<style lang="css" scoped>
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