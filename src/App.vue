<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from '@/views/Main';

export default {
  name: 'App',
  components: {
    Main,
  }
}
</script>

<style lang='css'>
* Reset */
html, body, header, nav, h1, a,
ul, li, strong, main, button, i,
section, img, div, h2, p, form,
fieldset, label, input, textarea,
span, article, footer, time, small, 
h3, h4, h5, pre {
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
  width: 99%;
  margin: 0;
  padding: 0;
}

h1, h2, h3 { font-weight: 700; }
h4, h5, h6 { font-weight: 600; }

h1 { font-size: 26px; }
h2 { font-size: 24px; }
h3 { font-size: 22px; }
h4 { font-size: 20px; }
h5 { font-size: 18px; }
p { font-size: 16px; }


pre {
  background-color: gainsboro;
  padding: 10px;
}

@media (min-width : 1024px) {
  #app { margin: 0 auto; }
  img { width: 100% }
}
</style>
