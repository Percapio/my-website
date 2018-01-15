<template>
  <div id='blogs'>
    {{ msg }}
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({})
  export default class BlogComponent extends Vue {
    name    : string      = 'blogs';
  }
</script>