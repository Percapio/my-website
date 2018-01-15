<template>
  <div id='projects'>
    <img src="../../assets/logo.png">

    {{ msg }}

  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({})
  export default class ProjectComponent extends Vue {
    name : string = 'projects';
  }
</script>