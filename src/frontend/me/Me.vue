<template>
  <div id='me'>
    <h2>Thomas Vu</h2>
    <hr class= 'me-hr'/>

    <textarea rows='4' cols='40' class='sentences'>Dolorum ex porro sed illum dolore sint rem. Quis ipsam hic occaecati. Vel fuga cumque aut.</textarea>

    <img :src="myface" class='my-ugly-face'>
    <hr class= 'img-hr'/>
    
    <textarea rows='10' cols='40' class='paragraph'>Eum numquam beatae assumenda eligendi. Assumenda deleniti tempora. Exercitationem similique qui. Earum iure dolorem quos voluptatem. Quasi molestiae dolorem minima architecto odio.</textarea>
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

    h2 {
      font-weight: 700;
      font-size: 72px;
    }
  }

  .me-hr, .img-hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    width: 70%;
  }

  .img-hr {
    margin-top: 30px;
  }

  .my-ugly-face {
    object-fit: contain;
    width: 100%;
  }

  textarea {
    resize: none;
    margin-top: 40px;
    font-size: 28px;
    text-indent: 40px;
  }

  .paragraph {
    text-align: left;
    text-indent: 40px;
  }
</style>

