<template>
  <div id='me'>
    <h2>Thomas Vu</h2>
    <hr class= 'me-hr'/>

    <p class='sentences'>Software Engineer</p>

    <img :src="myface" class='my-ugly-face'>
    <hr class= 'img-hr'/>
    
    <p  class='paragraph'>I am a Software Engineer, an English major graduate, a former Marine, and a student.  I continuously strive to learn, and to grow, through not only formal education, but the constant interactions with the incredible individuals I have met in my life.  I hope you will be one, too.</p>
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

  .paragraph {
    margin-top: 40px;
    text-indent: 5%;
  }

  @media (min-width : 1024px) {
    img {
      width: 50%;
    }
  }
</style>

