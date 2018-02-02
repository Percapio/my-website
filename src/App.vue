<template>
  <div id="app">
    <NavBar :scrolled='scrolled'/>
    <SPA :scrolled='scrolled'/>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator';
  import NavBar from './frontend/navbar/NavBar.vue';
  import SPA from './frontend/spa/SPA.vue';

  @Component({
    components: { NavBar, SPA }
  })
  export default class MyApp extends Vue {
    name     : string = 'app';
    scrolled : boolean = false;

    handleScroll () {
      this.scrolled = window.scrollY > 0;
    }

    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    }
    
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  } 
</script>

<style lang='css'>
/* Reset */
html, body, header, nav, h1, a,
ul, li, strong, main, button, i,
section, img, div, h2, p, form,
fieldset, label, input, textarea,
span, article, footer, time, small, 
h3, h4, h5 {
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
  border-radius: inherit;
}

ul, li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
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

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  width: 70%;
  margin: 0;
  padding: 0;
}

h1, h2, h3 { font-weight: 700; }
h4, h5, h6 { font-weight: 600; }

h1 { font-size: 70px; }
h2 { font-size: 60px; }
h3 { font-size: 50px; }
h4 { font-size: 40px; }
h5 { font-size: 30px; }
p { font-size: 26px; }


@media (min-width : 1024px) {
  #app { margin: 0 auto;}

  h1 { font-size: 68px; }
  h2 { font-size: 58px; }
  h3 { font-size: 48px; }
  h4 { font-size: 38px; }
  h5 { font-size: 28px; }
  p { font-size: 23px; }
  input { font-size: 23px; }
}
</style>
