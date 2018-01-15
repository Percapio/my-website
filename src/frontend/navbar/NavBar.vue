<template>
  <div id='navbar'>
    <div class='nav-icons'>
      <a :href="mail"><img :src='mailImg'/></a>
      <a :href="github"><img :src='gitImg'/></a>
      <a :href="linkedin"><img :src='linkImg'/></a>
      <a href="/" class='nav-solo' v-if='scrollup'><img :src='backtop'/></a>
    </div>
  </div>
</template>

<script lang='ts'>
    // <router-link class='nav-links' to='/'>home</router-link>
    // <router-link class='nav-links' to='/me'>me</router-link>
    // <router-link class='nav-links' to='/blogs'>blogs</router-link>
    // <router-link class='nav-links' to='/projects'>projects</router-link>
    // <router-link class='nav-links' to='/contactme'>contactme</router-link>
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class NavBar extends Vue {
    name: string = 'navbar';

    mail      : string = "mailto:mr.thomas.vu@gmail.com";
    mailImg   : string = 'src/assets/mail-512.png';
    github    : string = "https://github.com/Percapio";
    gitImg    : string = 'src/assets/github.png';
    linkedin  : string = "https://www.linkedin.com/in/mrthomasmvu/";
    linkImg   : string = 'src/assets/linkedin-logo_318-76861.jpg';
    backtop   : string = 'src/assets/back_to_top.png';

    scrollup  : boolean = false;
  };
</script>

<style lang="scss" scoped>
  #navbar {
    position: fixed;
    padding-top: 30px;
    padding-bottom: 30px;
    background: white;
    border-bottom: 1px solid #ccc;
  }

  .nav-icons {
    display: flex;
    justify-content: flex-start;

    img {
      object-fit: contain;
      height: 75px;
    }
  }
</style>