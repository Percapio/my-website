<template>
  <div id='navbar'>
    <h2>Routing Buttons:</h2>
    <router-link class='nav-links' to='/'>home</router-link>
    <router-link class='nav-links' to='/me'>me</router-link>
    <router-link class='nav-links' to='/blogs'>blogs</router-link>
    <router-link class='nav-links' to='/projects'>projects</router-link>
    <router-link class='nav-links' to='/contactme'>contactme</router-link>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class NavBar extends Vue {
    name: string = 'navbar';
    navbar: string = 'navbar?'

    data() {
      return {
        msg: 'Welcome to NavBar'
      }
    }
  };
</script>

<style lang="scss" scoped>
  #navbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links, h2 {
    margin-right: 10px;
  }
</style>