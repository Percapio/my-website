<template>
  <section id='projects'>
    <hr/>
    <h3>{{ project[1].data.title }}</h3>
    <img :src="project[1].data.img" class='project-img'>

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

<style lang='scss' scoped>
  #projects {
    width: 90%;
    margin-top: 50px;
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
</style>