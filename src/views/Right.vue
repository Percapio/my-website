<template>
  <nav class="nav right">
    <template v-for="group in navs">
      <li>
        <a
          href="#"
          @click.prevent="group.visible = !group.visible"
          class="nav-label"
          v-text="group.title">
        </a>
      </li>
      <ul v-show="group.visible" transition="slidedown" :style="{ maxHeight: group.list.length * 36 + 'px' }">
        <li v-for="item in group.list">
          <router-link
            class="nav-link"
            :to="{ path: '/' + item.path }"
            active-class="is-active"
            v-text="item.name">
          </router-link>
        </li>
      </ul>
      <li>
        <a
          href=""
          class="nav-label"
          v-text="group.back_top">
        </a>
      </li>
    </template>
  </nav>
</template>

<script>
  import NavsConfig from '@/router/nav.config.json';

  NavsConfig.map(item => {
    item.visible = true;
    return item;
  });

  export default {
    name: 'RIGHT',

    components: {
    },
    data () {
      return {
        msg: 'RIGHT COMPONENT',
        navs: NavsConfig
      }
    }
  }
</script>

<style lang="css" scoped>
  .right {
    text-align: left;
  }

  .edit-doc-btn {
    color: red !important;
  }

  .slidedown-transition {
    transition: all .3s ease-in-out;
    overflow: hidden;
    opacity: 1;
  }

  .slidedown-enter,
  .slidedown-leave {
    max-height: 0 !important;
    opacity: 0.3;
  }

  .nav {
    background-color: #f9fafb;
    color: #4c555a;
    font-size: 14px;
    min-height: 100%;
    padding: 42px 0 42px 20px;
  }

  .nav-label {
    color: #9da5b3;
    font-weight: bold;
    display: block;
  }

  .nav-link {
    padding: 8px;
    display: block;
    text-decoration: none;
    color: inherit;
    transition: color .2s;

    .nav-link.is-active {
      color: #4078c0;
      border-right: 2px solid;
    }

    .nav-link:hover {
      color: #4078c0;
    }
  }

  pre, code {
    width: 80%;
    word-wrap: normal;
  }

  ul, li {
    list-style: none;
  }

  @media (min-width : 1024px) {
    .right { 
      margin: 0 auto;
    }
  }
</style>