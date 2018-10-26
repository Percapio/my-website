<template>
  <div id='left'>
    <router-view id='markdown' />
  </div>
</template>

<script>
  export default {
    name: 'Left',

    components: {
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="css" scoped>
  #left {
    text-align: left;
  }

  @media (min-width : 1024px) {
    #left { 
      margin: 0 auto;
      width: 65%;
      padding-left: 15%;
    }

    #markdown {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }
</style>