<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-modal': () => import('./'),
      'l-button': () => import('../Button')
    },
    data: ()=> ({
      visible: false
    })
  }
</script>

<template>
  <div>
    <h1>Modal</h1>
    <p>Скрытая часть появляющаяся поверх всего. Как правило по середине</p>
    <Code v="import { l-modal } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <l-button @click.native="visible = !visible">
      Открыть
    </l-button>
    <l-modal
      title="Пример"
      :visible="visible"
      :onDismiss="()=> visible = false"
      :onCancel="()=> visible = false"
      :onDone="()=> visible = false"
    >Контент</l-modal>
  </div>
</template>
