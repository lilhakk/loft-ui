<script>
  import * as components from '@loft-ui/vue';
  import s from '../index.scss';

  export default {
    name: 'sidebar',
    methods: {
      getName(name) {
        name = name.replace(/l\-/gi, '')
        return name[0].toUpperCase() + name.slice(1)
      }
    },
    data: () => ({ s, components })
  }
</script>

<template>
  <div :class="s.sidebar">
    <l-menu
      variant='vertical'
    >
      <l-menu-item
        :to="'/vue/' + getName(component.name).toLowerCase()"
        v-for="component in components"
        :active="'/vue/' + getName(component.name).toLowerCase() === $route.path"
        :key="component.name"
      >
        {{ getName(component.name) }}
      </l-menu-item>
    </l-menu>
  </div>
</template>
