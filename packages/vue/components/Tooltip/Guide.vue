<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-tooltip': () => import('./')
    },
    data: ()=> ({})
  }
</script>

<template>
  <div>
    <h1>Tooltip</h1>
    <Code v="import { l-tooltip } from 'loft-ui';" />

    <h2>Простой пример</h2>
  </div>
</template>
