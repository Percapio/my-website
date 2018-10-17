<template>
  <div id='left'>
    <h3>{{ msg }}</h3>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'Left',

    components: {
    },
    data () {
      return {
        msg: 'LEFT COMPONENT'
      }
    }
  }
</script>

<style lang="css" scoped>
  #left {
    outline: 3px;
    outline-color: red;
    width: 70%;
    padding: 10px;
    display: inline-block;
  }
</style>