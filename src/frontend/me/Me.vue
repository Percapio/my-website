<template>
  <div id='me'>
    <h2>Thomas Vu</h2>
    <hr class= 'me-hr'/>

    <p class='sentences'>Dolorum ex porro sed illum dolore sint rem. Quis ipsam hic occaecati. Vel fuga cumque aut.</p>

    <img :src="myface" class='my-ugly-face'>
    <hr class= 'img-hr'/>
    
    <p  class='paragraph'>Eum numquam beatae assumenda eligendi. Assumenda deleniti tempora. Exercitationem similique qui. Earum iure dolorem quos voluptatem. Quasi molestiae dolorem minima architecto odio.</p>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({})
  export default class Me extends Vue {
    name: string = 'me';

    myface : string = "src/assets/myuglyface.png";
  };
</script>

<style lang="scss" scoped>
  #me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }

  img {
    margin-top: 20px;
  }

  .img-hr {
    margin-top: 35px;
  }

  p {
    margin-top: 40px;
    text-indent: 5%;
  }
</style>

