<template>
  <div id='bottom'>
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
      }
    }
  }
</script>

<style lang="css" scoped>
  @media (min-width : 1024px) {
    #bottom{
      display: flex;
    }
  }
</style>