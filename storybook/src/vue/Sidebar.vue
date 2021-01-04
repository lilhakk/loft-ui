<script>
  import * as components from '@loft-ui/vue';
  import s from '../index.scss';

  export default {
    name: 'sidebar',
    data: () => ({ s, components })
  }
</script>

<template>
  <div :class="s.sidebar">
    <router-link
      :class="s.sidebarItem"
      :active-class="s.sidebarItemActive"
      :to="'/vue/' + component.name.toLowerCase()"
      v-for="component in components"
      :key="component.name"
    >
      {{ component.name }}
    </router-link>
  </div>
</template>
