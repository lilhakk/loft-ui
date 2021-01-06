<script>
  import { Code, InlineCode as I } from '../../helpers';

  const Example = {
    components: { Checkbox: () => import('./') },
    methods: {
      changeActive(index) {
        this.actives[index] = !this.actives[index];
        this.actives = [...this.actives];
      }
    },
    data: ()=> ({ actives: [false, true] }),
    template: `
      <div>
        <Checkbox
          :selected="actives[0]"
          @click.native="()=> changeActive(0)"
        >Default</Checkbox>
        <Checkbox
          :selected='actives[1]'
          @click.native="()=> changeActive(1)"
        >Checked</Checkbox>
      </div>
    `
  };

  export default {
    components: {
      I, Code,
      Example,
      Checkbox: () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Checkbox</h1>
    <p>С помощью чекбоксов пользователь выбирает элементы из списка данных</p>
    <Code v="import { Checkbox } from 'loft-ui'" />

    <h2>Пример</h2>
    <Code v="
      components: { Checkbox },
      data: ()=> ({ selected: false }),
      template: `
        <Checkbox
          :selected='selected'
          @click.native='selected = !selected'
        >Example</Checkbox>
      `
    " />
    <Example />
  </div>
</template>
