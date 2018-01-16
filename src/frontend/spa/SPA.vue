<template>
  <div id='spa'>
    <Me name='me'></Me>
    <h2 class='sub-headers'>Projects:</h2>
    <ProjectComponent name='projects' :project='project2' v-if='scrolled'/>
    <ProjectComponent name='projects' :project='project1' v-if='scrolled'/>
    <h2 class='sub-headers'>Contact me</h2>
    <ContactComponent name='contacts'/>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { findAllCheck, addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  import Me from '../me/Me.vue';
  import BlogComponent from '../blogs/Blogs.vue';
  import ProjectComponent from '../projects/Projects.vue';
  import ContactComponent from '../contactme/ContactMe.vue';

  // import CreateBlog from '../blogs/CreateBlog.vue';
  import CreateProject from '../projects/CreateProject.vue';

  @Component({
    components: { 
      Me, BlogComponent, ProjectComponent, CreateProject, ContactComponent
    },
  })
  export default class SPA extends Vue {
    name  : string = 'spa';

    // State
    blogs    : any;
    projects : any;
    project1 : Array<any>;
    project2 : Array<any>;
    project3 : Array<any>;
    render   : boolean = false;
    scrolled : boolean = false;

    // Test
    trial    : string = 'HELLO WORLD'

    mounted() : void {
      // Controllers.getAllBlogs( this.getBlogItms.bind(this) );
      Controllers.getAllProjects( this.getProjectItms.bind(this) );
    }

    getBlogItms(listItms : Array<any>) {
      this.blogs = listItms;
    }

    getProjectItms(listItms : Array<any>) {
      this.projects = listItms;
      this.project1 = this.projects[0];
      this.project2 = this.projects[1];
      this.render   = true;
    }

    handleScroll () {
      this.scrolled = window.scrollY > 0;
    }

    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    }
    
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
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
    margin-top: 70px;
  }
</style>

