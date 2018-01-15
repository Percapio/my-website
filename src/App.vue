<template>
  <div id="app">
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
  };
</script>

<style lang="scss">
/* Reset */
html, body, header, nav, h1, a,
ul, li, strong, main, button, i,
section, img, div, h2, p, form,
fieldset, label, input, textarea,
span, article, footer, time, small {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  text-decoration: inherit;
  vertical-align: inherit;
  box-sizing: inherit;
  background: transparent;
  display: block;
  word-wrap: inherit;
  box-sizing: inherit;
  font-family: inherit;
}

ul, li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

input[type="password"],
input[type="email"],
input[type="text"],
input[type="submit"],
textarea {
  /*
  Get rid of native styling. Read more here:
  http://css-tricks.com/almanac/properties/a/appearance/
  */
  -webkit-appearance: none;
  -moz-appearance: none;
}

button,
input[type="submit"] {
  cursor: pointer;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
