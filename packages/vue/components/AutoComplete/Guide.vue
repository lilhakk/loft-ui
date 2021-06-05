<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-auto-complete': () => import('./')
    },
    data: ()=> ({
      example: {}
    })
  }
</script>

<template>
  <div>
    <h1>AutoComplete</h1>
    <p>Всплывающие окно со списком, для выбора значения, со вспомогательным полем для ввода текста</p>
    <Code v="import { l-auto-complete } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <l-auto-complete
      :value="example"
      :onChange='v => example = v'
      :data="[
        { label: 'Jack London', value: 'jl' },
        { label: 'Liam Ellis', value: 'le' },
        { label: 'Jude Davis', value: 'jd' },
        { label: 'Noah Fraser', value: 'nf' },
        { label: 'Dylan John', value: 'dj' },
        { label: 'Frederick Palmer', value: 'fp' },
        { label: 'Blaze Diaz', value: 'bd' },
        { label: 'Declan Cervantes', value: 'dc' },
        { label: 'Maximilian Shepard', value: 'ms' }
      ]"
    />
  </div>
</template>
