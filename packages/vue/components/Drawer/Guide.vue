<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-drawer': () => import('./'),
      'l-button': () => import('../Button')
    },
    data: ()=> ({
      visible: false
    })
  }
</script>

<template>
  <div>
    <h1>Drawer</h1>
    <Code v="import { l-drawer } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({ visible: false }),
      template: `
        <l-drawer
          :visible='visible'
          :onDismiss='()=> visible = false'
        >Content</l-drawer>
        <l-button @click.native='visible = !visible'>
          Открыть
        </l-button>
      `
    " lang="html" />
    <l-drawer
      :visible="visible"
      :onDismiss="()=> visible = false"
    >Контент</l-drawer>
    <l-button @click.native="visible = !visible">
      Открыть
    </l-button>
  </div>
</template>
