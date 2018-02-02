<template>
  <div id='navbar'>
    <a :href="mail"><img :src='mailImg'/><p>Send an e-mail?</p></a>
    <a :href="github"><img :src='gitImg'/><p>Go to Github profile?</p></a>
    <a :href="linkedin"><img :src='linkImg'/><p>Go to LinkedIn profile?</p></a>
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
    linkImg   : string = 'src/assets/linkedin.png';
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

<style lang="css" scoped>
  #navbar {
    display: flex;
    position: fixed;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    background: white;
    border-bottom: 1px solid #ccc;
  }

  a {
    width: 33%;
  }

  img {
    object-fit: contain;
    height: 75px;
  }

  p {
    display: none;
  }

  @media (min-width : 1024px) {
    #navbar {
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    a {
      display: flex;
      width: 50px;
      height: 50px;
      margin-left: 21%;
    }

    img {
      height: auto;
    }

    a:hover > p {
      padding-left: 20px;
      font-size: 10px;
      display: block;
    }
  }
</style>