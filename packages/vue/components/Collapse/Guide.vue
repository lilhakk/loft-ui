<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-button': () => import('../Button'),
      'l-collapse': () => import('./')
    },
    data: ()=> ({
      visible: false,
      visible2: false
    })
  }
</script>

<template>
  <div>
    <h1>Сollapse</h1>
    <p>Компонент чтобы скрыть содержимое и отображать по событию</p>
    <Code v="import { l-collapse } from 'loft-ui'" />

    <h2>Простой пример</h2>
    <l-collapse :visible="visible">
      <div style="padding: 8px; box-sizing: border-box;">
        <div>111</div>
        <div>111</div>
        <div>111</div>

        <l-collapse :visible="visible2">
          <div>222</div>
          <div>222</div>
          <div>222</div>
        </l-collapse>
        <l-button @click.native="visible2 = !visible2">
          {{ visible2 ? 'Скрыть' : 'Показать' }}
        </l-button>
      </div>
    </l-collapse>
    <l-button @click.native="visible = !visible">
      {{ visible ? 'Скрыть' : 'Показать' }}
    </l-button>
  </div>
</template>
