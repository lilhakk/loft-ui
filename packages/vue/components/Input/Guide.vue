<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-input': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Input</h1>
    <p>...описание...</p>
    <Code v="import { l-input } from 'loft-ui'" />

    <h2>Простой пример</h2>

  </div>
</template>
