<template>
  <div id='Main'>
    <NavBar />
    <Top />
    <Bottom />
  </div>
</template>

<script>
  import Top from '@/views/Top'
  import Bottom from '@/views/Bottom'
  import NavBar from '@/views/NavBar'

  export default {
    name: 'Main',

    components: {
      Bottom,
      Top,
      NavBar
    },
    data () {
      return {
        msg: 'MAIN COMPONENT'
      }
    }
  }
</script>

<style lang="css" scoped>
</style>