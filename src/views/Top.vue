<template>
  <div id='top'>
    <div id='banner'>{{ msg }}</div>
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'Top',

    components: {
    },
    data () {
      return {
        msg: '> 0.0.0.0/0 NULL0'
      }
    }
  }
</script>

<style lang="css" scoped>
  #banner {
    font-size: 2em;
    padding: 10%;
  }
</style>