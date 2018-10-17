<template>
  <div id='bottom'>
    <h3>{{ msg }}</h3>
    <Left />
    <Right />
  </div>
</template>

<script>
  import Left from '@/views/Left'
  import Right from '@/views/Right'

  export default {
    name: 'Bottom',

    components: {
      Left,
      Right
    },    
    data () {
      return {
        msg: 'BOTTOM'
      }
    }
  }
</script>

<style lang="css" scoped>
</style>