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
    <l-tooltip
      :content="{
        template: `<div>Контент</div>`
      }"
    >
      <div style="
        width: 36px;
        height: 36px;
        background-color: #f4f5f7;
        border-radius: 60px;
      " />
    </l-tooltip>
  </div>
</template>
