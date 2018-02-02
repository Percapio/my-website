<template>
  <section id='projects' :style="{ backgroundColor: color }">
    <h4>{{ project[1].data.title }}</h4>
    <a :href='project[1].data.url'>
      <img :src="project[1].data.img" class='project-img'/>
    </a>
    <aside class='project-skills'>
      <h5 class='project-subs'>Technologies</h5>
      <ul class='skills'>
        <li v-for='tech in project[1].data.technologies'><p>{{ tech }}</p></li>
      </ul>

      <h5 class='project-subs'>Languages</h5>
      <ul class='skills'>
        <li v-for='language in project[1].data.languages'><p>{{ language }}</p></li>
      </ul>

      <p class='description'>{{ project[1].data.description }}</p>
    </aside>
    <div class='re-direct'>
      <a :href='project[1].data.url'>Would you like to check out my work?</a>
      <hr class='re-direct-bar'/>
    </div>
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

    @Prop()
    color : string;
  }
</script>

<style lang='css' scoped>
  #projects {
    padding: 35px;
    padding-top: 40px;
  }
  
  .skills {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .project-skills {
    margin-top: 30px;
  }

  .description {
    text-indent: 5%;
    margin-top: 50px;
  }

  hr {
    margin-bottom: 30px;
  }

  .re-direct {
    width: 36%;
    margin-top: 20px;
  }

  .re-direct:hover > .re-direct-bar {
    background-color: rgba(0, 150, 255, 0.4);
  }

  .re-direct:hover {
    color: rgba(0, 150, 255, 0.4);
  }

  @media (min-width : 1024px) {
    #projects {
      padding: 20%;
      padding-top: 5%;
      padding-bottom: 5%;
    }

    img {
      margin-left: 5%;
      width: 90%;
    }

    .re-direct {
      width: 50%;
    }

    .re-direct-bar {
      margin-left: 17%;
    }
    
    a:hover > img {
      -webkit-box-shadow: 9px 10px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 9px 10px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 9px 10px 5px 0px rgba(0,0,0,0.75);
    }
    
    .description {
      margin-top: 30px;
    }
  }
</style>