<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-switch': () => import('./')
    },
    data: ()=> ({ selected: false })
  }
</script>

<template>
  <div>
    <h1>Switch</h1>
    <p>Используется для выбора между двумя значениями</p>
    <Code v="import { l-switch } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({ selected: false }),
      template: `
        <l-switch
          :selected='selected'
          @click.native='selected = !selected'
        />
      `
    " lang="html" />
    <l-switch
      :selected='selected'
      @click.native="selected = !selected"
    />
  </div>
</template>
