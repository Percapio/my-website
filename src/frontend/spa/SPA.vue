<template>
  <div id='spa'>
    <Me name='me'></Me>
    <BlogComponent name='blogs'></BlogComponent>
    <h2 class='sub-headers'>Projects</h2>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <ProjectComponent name='projects'></ProjectComponent>
    <h2 class='sub-headers'>Contact me</h2>
    <ContactComponent name='contacts'></ContactComponent>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { findAllCheck, addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  import BlogComponent from '../blogs/Blogs.vue';
  import ContactComponent from '../contactme/ContactMe.vue';
  import Me from '../me/Me.vue';
  import ProjectComponent from '../projects/Projects.vue';

  @Component({
    components: { 
      Me, BlogComponent, ProjectComponent, ContactComponent 
    },
    // props: [ this.blogs, this.projects ]
  })
  export default class SPA extends Vue {
    name: string = 'spa';

    // State
    blogs    : any;
    projects : any;

    // mounted() : void {
    //   Controllers.getAllBlogs( this.getBlogItms.bind(this) );
    //   Controllers.getAllProjects( this.getProjectItms.bind(this) );
    // }

    getBlogItms(listItms : Array<any>) {
      this.blogs = listItms;
    }

    getProjectItms(listItms : Array<any>) {
      this.projects = listItms;
    }
  };
</script>

<style lang="scss" scoped>
  #spa {
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sub-headers {
    font-weight: 700;
    font-size: 72px;
  }
</style>

