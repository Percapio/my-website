<template>
  <div id='Main'>
    <Top />
    <Bottom />
  </div>
</template>

<script>
  import Top from '@/views/Top'
  import Bottom from '@/views/Bottom'

  export default {
    name: 'Main',

    components: {
      Bottom,
      Top
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