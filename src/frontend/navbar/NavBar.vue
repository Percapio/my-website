<template>
  <div id='navbar'>
    <a :href="mail"><img :src='mailImg'/></a>
    <a :href="github"><img :src='gitImg'/></a>
    <a :href="linkedin"><img :src='linkImg'/></a>
  </div>
</template>

<script lang='ts'>
    // <router-link class='nav-links' to='/'>home</router-link>
    // <router-link class='nav-links' to='/me'>me</router-link>
    // <router-link class='nav-links' to='/blogs'>blogs</router-link>
    // <router-link class='nav-links' to='/projects'>projects</router-link>
    // <router-link class='nav-links' to='/contactme'>contactme</router-link>
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class NavBar extends Vue {
    name      : string  = 'navbar';

    mail      : string = "mailto:mr.thomas.vu@gmail.com";
    mailImg   : string = 'src/assets/mail-512.png';
    github    : string = "https://github.com/Percapio";
    gitImg    : string = 'src/assets/github.png';
    linkedin  : string = "https://www.linkedin.com/in/mrthomasmvu/";
    linkImg   : string = 'src/assets/linkedin-logo_318-76861.jpg';
    backtop   : string = 'src/assets/back_to_top.png';

    @Prop()
    scrolled : boolean;

    mount() {
      let navbar : any = document.querySelector('#navbar');

      // this.$nextTick( () => {
      //   if (this.scrolled) {
      //     navbar.style.paddingTop = '15px';
      //     navbar.style.paddingBottom = '15px';
      //   } else {
      //     navbar.style.paddingTop = '30px';
      //     navbar.style.paddingBottom = '30px';          
      //   }
      // })
    };
  };
</script>

<style lang="scss" scoped>
  #navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding-top: 30px;
    padding-bottom: 30px;
    background: white;
    border-bottom: 1px solid #ccc;
  }

  img {
    object-fit: contain;
    height: 75px;
  }

@media (min-width : 1024px) {
    #navbar {
      width: 70%;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    img {
      width: 70%;
    }
  }
</style>