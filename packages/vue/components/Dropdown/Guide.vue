<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-dropdown': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Dropdown</h1>
    <Code v="import { l-dropdown } from 'loft-ui';" />

    <h2>Простой пример</h2>
  </div>
</template>
