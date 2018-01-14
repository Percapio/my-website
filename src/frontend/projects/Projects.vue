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

  @Component({})
  export default class Projects extends Vue {
    name: string = 'projects';
    projects: string = 'PROJECTS!!';

    data () {
      return {
        msg: "Welcome to Projects.",
      }
    }
    
    projectsButton() : void {
      window.alert(this.projects);
    }
  };
</script>

<style lang="scss" scoped>
  #projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
