<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-radio': () => import('./')
    },
    data() {
      return { active: -1 }
    }
  }
</script>

<template>
  <div>
    <h1>Radio</h1>
    <p>Позволяет выбрать только одно значение из группы</p>
    <Code v="import { l-radio } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({ active: -1 }),
      template: `
        <l-radio :active='active'>
          <l-radio-item :value='1'>Select 1</l-radio-item>
          <l-radio-item :value='2'>Select 2</l-radio-item>
        </l-radio>
      `
    " lang="html" />
    <l-radio :active="active">
      <l-radio-item :value='1'>Select 1</l-radio-item>
      <l-radio-item :value='2'>Select 2</l-radio-item>
    </l-radio>
  </div>
</template>
