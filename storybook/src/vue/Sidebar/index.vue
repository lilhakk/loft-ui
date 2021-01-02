<script>
  import s from './index.scss';

  export default {
    name: 'sidebar',
    data: () => ({ s })
  }
</script>

<template>
  <div v-bind:class="s.sidebar">Sidebar</div>
</template>
