<template>
  <div id='projects'>
    <img src="../../assets/logo.png">
    {{ msg }}

    <section class='project-body'>
      <div class='form-container'>
        <p v-show='projectFetched'>{{ dateCreated }}<p>
        <p v-show='projectFetched'>{{ ranking }}<p>
        <form v-on:submit='handleProject' class='project-form'>
          <input type='text' v-model='title' placeholder='Enter Title'>
          <textarea type='text' v-model='description' placeholder='Enter Description'/>
          <input type='text' v-model='blurb' placeholder='Enter Blurb'>
          <input type='text' v-model='img' placeholder='Enter Img Url'>
          <input type='text' v-model='url' placeholder='Enter Web Url'>
          <input type='submit' value='Submit or Update'>
        </form>
        <input type='text' v-model='projectId' placeholder='Enter Id'>
        <div class='buttons'>
          <button @click='removeProject'>Delete a project</button>
          <button @click='getProject'>Grab a project</button>
        </div>
      </div>
      <aside>
        <ul class='project-items' v-show='filled'>
          <h4>projects to be listed:</h4>
          <li v-for='(project, index) in projects'>
            <p>{{ index }}: {{ project[0] }}</p>
            <p>{{ project[1].data.title }}</p>
            <p>{{ project[1].data.img }}</p>
            <p>{{ project[1].data.blurb }}</p>
            <p>{{ project[1].data.url }}</p>
            <p>{{ project[1].data.ranking }}</p>
            <p>{{ project[1].data.dateCreated }}</p>
          </li>
        </ul>
      </aside>
    </section>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { findAllCheck, addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  @Component({})
  export default class ProjectsComponent extends Vue {
    name        : string     = 'projects';
    msg         : string     = "Welcome to Projects";
    projectId   : string     = '';
    oneProject  : Array<any> = [];
    projects    : any;

    // Project Keys
    title       : string = '';
    description : string = '';
    blurb       : string = '';
    img         : string = '';
    url         : string = '';
    ranking     : number = 999;
    dateCreated : number = 0;
    dateUpdated : number;

    // Rendering
    filled          : boolean = false;
    projectFetched  : boolean = false;
    
    mounted() {
      this.projects = Controllers.getAllProjects( this.updateProjectsList.bind(this) );
    }

    updateProjectsList(newProjects : Array<any>) {
      this.projects = newProjects;
      let noErrors = findAllCheck(this.projects, this.msg);

      if (noErrors) {
        this.filled = true;
      }
    }

    // Methods
    handleProject(e : any) : void {
      e.preventDefault();
      
      if (this.dateCreated === 0) {
        this.addProject();
      } else {
        if (this.projectId.length === 0) {
          this.msg = 'please, input project id first'
        } else {
          this.changeProject();
        }
      }
    }

    addProject() : void {
      const projectData : Interfaces.Project = {
        title: this.title,
        description: this.description,
        blurb: this.blurb,
        img: this.img,
        url: this.url,
        ranking: this.ranking,
        dateCreated: 0,
        dateUpdated: 0,
      }

      const check = Controllers.createProject(projectData);
      addItemCheck(check, this.msg);
    }

    changeProject() {
      const projectData : Interfaces.Project = {
        title: this.title,
        description: this.description,
        blurb: this.blurb,
        img: this.img,
        url: this.url,
        ranking: this.ranking,
        dateCreated: this.dateCreated,
        dateUpdated: Date.now(),
      }

      const check = Controllers.patchProject(this.projectId, projectData);
    }

    getProject() : void {
      Controllers.showProject(this.projectId, this.grabProject.bind(this));
    }

    grabProject(newProject : Array<any>) {
      this.title        = newProject[0].title;
      this.description  = newProject[0].description;
      this.blurb        = newProject[0].blurb;
      this.img          = newProject[0].img;
      this.url          = newProject[0].url;
      this.ranking      = newProject[0].ranking;
      this.dateCreated  = newProject[0].dateCreated;

      this.projectFetched = true;
    }

    removeProject(e : any) : void {
      e.preventDefault();
      
      Controllers.destroyProject(this.projectId);
      this.projects = Controllers.getAllProjects( this.updateProjectsList.bind(this) );
      this.msg = `${ this.projectId } is deleted.`
    }
  };
</script>

<style lang="scss" scoped>
  #projects, .project-body, .project-form, aside, .project-items,
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #projects, .project-form, .project-items, .form-container {
    flex-direction: column;
  }

  .project-form {
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
