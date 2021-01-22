<script>
  import { Code, InlineCode as I } from '../../helpers';

  const Example = {
    components: { 'l-checkbox': () => import('./') },
    methods: {
      changeActive(index) {
        this.actives[index] = !this.actives[index];
        this.actives = [...this.actives];
      }
    },
    data: ()=> ({ actives: [false, true] }),
    template: `
      <div>
        <l-checkbox
          :selected="actives[0]"
          @click.native="()=> changeActive(0)"
        >Default</l-checkbox>
        <l-checkbox
          :selected='actives[1]'
          @click.native="()=> changeActive(1)"
        >Checked</l-checkbox>
      </div>
    `
  };

  export default {
    components: {
      I, Code,
      Example,
      'l-checkbox': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Checkbox</h1>
    <p>С помощью чекбоксов пользователь выбирает элементы из списка данных</p>
    <Code v="import { l-checkbox } from 'loft-ui'" />

    <h2>Пример</h2>
    <Code v="
      data: ()=> ({ selected: false }),
      template: `
        <l-checkbox
          :selected='selected'
          @click.native='selected = !selected'
        >Example</l-checkbox>
      `
    " />
    <Example />
  </div>
</template>
