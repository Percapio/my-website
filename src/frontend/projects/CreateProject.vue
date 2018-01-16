<template>
  <div id='createproject'>
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
          <div class='technologies'>
            <input type='checkbox' id='node' v-on:click='handleTech' value='NodeJS'><label for='node'>NodeJS</label>
            <input type='checkbox' id='rails' v-on:click='handleTech' value='RubyonRails'><label for='rails'>RubyonRails</label>
            <input type='checkbox' id='react' v-on:click='handleTech' value='React'><label for='react'>React</label>
            <input type='checkbox' id='vue' v-on:click='handleTech' value='VueJS'><label for='vue'>VueJS</label>
            <input type='checkbox' id='canvas' v-on:click='handleTech' value='Canvas'><label for='canvas'>Canvas</label>
            <input type='checkbox' id='psql' v-on:click='handleTech' value='PostgreSQL'><label for='psql'>PostgreSQL</label>
            <input type='checkbox' id='fb' v-on:click='handleTech' value='Firebase'><label for='fb'>Firebase</label>
          </div>

          <div class='languages'>
            <input type='checkbox' id='js' v-on:click='handleLang' value='JavaScript'><label for='js'>JavaScript</label>
            <input type='checkbox' id='ruby' v-on:click='handleLang' value='Ruby'><label for='ruby'>Ruby</label>
            <input type='checkbox' id='ts' v-on:click='handleLang' value='TypeScript'><label for='ts'>TypeScript</label>
          </div>
          <input type='text' v-model='projectId' placeholder='Id'>
          <input type='submit' value='Submit or Update' class='form-submit'>
        </form>
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
  export default class CreateProject extends Vue {
    name        : string     = 'createproject';
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
    technologies: Array<string> = [];
    languages   : Array<string> = [];
    extras      : Array<string> = [];
    ranking     : number = 999;
    dateCreated : number = 0;
    dateUpdated : number;

    // Rendering
    filled          : boolean = false;
    projectFetched  : boolean = false;
    
    // mounted() {
    //   this.projects = Controllers.getAllProjects( this.updateProjectsList.bind(this) );
    // }

    updateProjectsList(newProjects : Array<any>) {
      this.projects = newProjects;
      let noErrors = findAllCheck(this.projects, this.msg);

      if (noErrors) {
        this.filled = true;
      }
    }

    // Methods
    handleTech(e : any) {
      if(this.technologies.includes(e.target.value)) {
        this.technologies.splice( this.technologies.indexOf(e.target.value, 1));
      } else {
        this.technologies.push(e.target.value);
      }
    }

    handleLang(e : any) {
      if(this.languages.includes(e.target.value)) {
        this.languages.splice( this.languages.indexOf(e.target.value, 1));
      } else {
        this.languages.push(e.target.value);
      }
      console.log(this.languages)
    }

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
        technologies : this.technologies,
        languages : this.languages,
        extras : this.extras,
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
        technologies : this.technologies,
        languages : this.languages,
        extras : this.extras,
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

<style lang="css" scoped>
  #createproject, .project-body, .project-form, aside, .project-items,
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #createproject, .project-form, .project-items, .form-container {
    flex-direction: column;
  }

  .project-form {
    margin: 10px;
    border-radius: 2px;

    input, textarea {
      width: 500px;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
    }

    input:nth-child(odd) {
      background: rgba(0, 0, 0, 0.1);
      border-top: 1px solid #ccc;
    }

    input:nth-child(even) {
      border-top: 1px solid #ccc;
    }

    input:first-child {
      border-bottom: 1px solid #ccc;
    }

    input:nth-child(5) {
      border-bottom: 1px solid #ccc;
    }

    .form-submit {
      background: rgba(0, 100, 255, 0.4);
      border-bottom: 1px solid #ccc;
    }

    .form-submit:hover {
      background: rgba(0, 150, 255, 0.4);
    }

    textarea {
      resize: none;
      height: 200px;
    }

    .technologies, .languages {
      margin-top: 5px;
      display: flex;
      flex-direction: rows;
      flex-wrap: wrap;

      p {
        margin: 0;
      }

      input {
        width: 70px;
        font-size: 10px;
        margin-right: 2px;
        border-bottom: 1px solid #ccc;
      }

      input:hover {
        background: rgba(0, 150, 255, 0.4);
      }
    }

    .languages {
      margin-bottom: 5px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 500px;

    button:hover {
      color: rgba(0, 150, 255, 0.4);;
    }
  }
</style>