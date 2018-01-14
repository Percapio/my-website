<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <NavBar></NavBar> 
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import NavBar from './frontend/navbar/NavBar.vue';

  @Component({
    components: { NavBar }
  })
  export default class MyApp extends Vue {
    name: string = 'app';
    message: string = 'testing';

    data () {
      return {
        msg: 'NavBar goes here.',
      }
    }
    
    onClick() : void {
      window.alert(this.message);
    }

    // <button @click="onClick">Click!</button>
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  h2 {
    display: inline;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
