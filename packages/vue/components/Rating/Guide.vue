<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-rating': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Rating</h1>
    <Code v="import { l-rating } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <l-rating />
  </div>
</template>
