<template>
  <section id='projects'>
    <hr/>
    <h3>{{ project[1].data.title }}</h3>
    <a :href='project[1].data.url'>
      <img :src="project[1].data.img" class='project-img'/>
    </a>
    <aside class='project-skills'>
      <h4 class='project-subs'>Technologies</h4>
      <ul class='skills'>
        <li v-for='tech in project[1].data.technologies'>
          <p>{{ tech }}</p>
        </li>
      </ul>

      <h4 class='project-subs'>Languages</h4>
      <ul class='skills'>
        <li v-for='language in project[1].data.languages'>
          <p>{{ language }}</p>
        </li>
      </ul>

      <p class='description'>{{ project[1].data.description }}</p>
    </aside>
  </section>
</template>

<script lang='ts'>
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class ProjectComponent extends Vue {
    name    : string = 'projects';
    msg     : string = '';

    @Prop()
    project : Array<any>;

    @Prop()
    trial : string;

  }
</script>

<style lang='css' scoped>
  #projects {
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  h4 {
    margin-top: 35px;
  }

  .skills {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .description {
    text-indent: 5%;
    margin-top: 50px;
  }

  hr {
    margin-bottom: 30px;
  }

  @media (min-width : 1024px) {
    img {
      margin-left: 5%;
      width: 90%;
    }

    a:hover > img {
      -webkit-box-shadow: 9px 10px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 9px 10px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 9px 10px 5px 0px rgba(0,0,0,0.75);
    }
  }
</style>