<template>
  <div id='navbar'>
    <div id='navbar-icons'>
      <div id='icons'>
        <v-attr src='@/src/database/images/github.png'>
      </div>
    </div>
    <hr id='navbar-line'/>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    components: {
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="css" scoped>
  #navbar {
    /* height: 50px;
    width: 100%; */
  }

  @media (min-width : 1024px) {
    #navbar { 
      margin: 0 auto;
    }
  }
</style>