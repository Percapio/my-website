<template>
  <div id='projects'>
    {{ msg }}
    <button @click="projectsButton">Click!</button>
    <img src="../../assets/logo.png">
    <img src="../../assets/logo.png">
    <img src="../../assets/logo.png">
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  @Component({})
  export default class Projects extends Vue {
    name      : string = 'projects';
    msg       : string = "Welcome to Projects";
    projects  : string = 'PROJECTS!!';

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
    
    // mounted() {
    
    // }

    // updateProjectsList(newProjects : Array<any>) {

    // }

    //Methods
    // handleProject(e : any) : void {
    //   e.preventDefault();
      
    //   if (this.dateCreated === 0) {
    //     this.addProject();
    //   } else {
    //     if (this.projectId.length === 0) {

    //     }
    //   }
    // }
    projectsButton() : void {
      window.alert(this.projects);
    }
  };

// createProject(project : Interfaces.Project)
// patchProject(id : string, project : Interfaces.Project)
// showProject(id : string, grabProject : any) : void
// destroyProject(id : string) : void
// getAllProjects(updateProjectsList : any) : void
// getTopProjects(updateProjectsList : any) : void
</script>

<style lang="scss" scoped>
  #projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
