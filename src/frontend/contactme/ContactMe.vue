<template>
  <div id='contactme'>
    {{ msg }}
    <button @click="contactMeButton">Click!</button>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({})
  export default class Projects extends Vue {
    name: string = 'contactme';
    projects: string = 'hi.';

    data () {
      return {
        msg: "Welcome to Contact Me.",
      }
    }
    
    contactMeButton() : void {
      window.alert(this.projects);
    }
  };
</script>

<style lang="scss" scoped>
  #contactme {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
