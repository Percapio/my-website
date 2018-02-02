<template>
  <div id='spa'>
    <Me name='me'></Me>
    <hr class='short-bar'/>
    <h2 class='sub-headers professional'>Professional Project:</h2>
    <WorkComponent name='works' :work='work1' v-if='scrolled' :color='templateRed'/>
    <hr class='short-bar'/>
    <h2 class='sub-headers personal'>Personal Projects:</h2>
    <ProjectComponent name='projects' :project='project2' v-if='scrolled' :color='templateGreen'/>
    <ProjectComponent name='projects' :project='project1' v-if='scrolled' :color='templateYellow'/>
    <hr class='short-bar'/>
    <h2 class='sub-headers contact'>Contact me</h2>
    <ContactComponent name='contacts'/>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { findAllCheck, addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  import Me from '../me/Me.vue';
  import BlogComponent from '../blogs/Blogs.vue';
  import ProjectComponent from '../projects/Projects.vue';
  import ContactComponent from '../contactme/ContactMe.vue';
  import WorkComponent from '../work/Works.vue';

  // import CreateBlog from '../blogs/CreateBlog.vue';
  // import CreateProject from '../projects/CreateProject.vue';
  // import CreateWork from '../work/CreateWork.vue';

  @Component({
    components: { 
      Me, BlogComponent, ProjectComponent, ContactComponent, WorkComponent
      // CreateWork, CreateProject, CreateBlog
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

    works    : any;
    work1    : Array<any>;

    templateYellow: string = '#f9ffb9';
    templateRed   : string = '#ffa5a5';
    templateGreen : string = '#c3f5c3';

    // Props
    @Prop ()
    scrolled : boolean;

    // Test
    trial    : string = 'HELLO WORLD'

    mounted() : void {
      // Controllers.getAllBlogs( this.getBlogItms.bind(this) );
      Controllers.getAllProjects( this.getProjectItms.bind(this) );
      Controllers.getAllWorks( this.getWorkItems.bind(this) );
    }

    getBlogItms(listItms : Array<any>) {
      this.blogs = listItms;
    }

    getProjectItms(listItms : Array<any>) {
      this.projects = listItms;
      this.project1 = this.projects[0];
      this.project2 = this.projects[1];
    }

    getWorkItems(listItms : Array<any>) {
      this.works = listItms;
      this.work1 = this.works[0];
    }
  };
</script>

<style lang='css' scoped>
  #spa {
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sub-headers {
    padding-top: 50px;
    width: 100%;
  }

  .professional {
    background-color: #ffa5a5;
  }

  .personal {
    background-color: #c3f5c3;
  }

  .short-bar {
    width: 100%;
    background-image: none;
    background-color: black;
  }

  @media (min-width : 1024px) {

  }

</style>

