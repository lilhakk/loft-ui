<script>
  import VueRouter from 'vue-router';
  import Sidebar from './components/Sidebar';
  import * as components from '@loft-ui/vue';
  import s from '../index.scss';

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: Object.keys(components).map(key => {
      return {
        path: `/vue/${key}`,
        component: components[key].guide
      }
    })
  });

  export default {
    router,
    name: 'app',
    components: { Sidebar },
    data: () => ({ s })
  }
</script>

<template>
  <main>
    <Sidebar />
    <router-view v-bind:class="s.root"></router-view>
  </main>
</template>
