<template>
  <div id='me'>
    <img src="../../assets/logo.png">
    {{ msg }}
    <button @click="meButton">Click!</button>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({})
  export default class Me extends Vue {
    name: string = 'me';
    myself: string = 'me me me';

    data () {
      return {
        msg: "Welcome to Me.",
      }
    }
    
    meButton() : void {
      window.alert(this.myself);
    }
  };
</script>

<style lang="scss" scoped>
  #me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

