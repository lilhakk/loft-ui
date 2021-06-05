<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-dropdown': () => import('./')
    },
    data: ()=> ({
      example: ''
    })
  }
</script>

<template>
  <div>
    <h1>Dropdown</h1>
    <Code v="import { l-dropdown } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({ selected: false }),
      template: `
        <l-dropdown
          :value='example'
          :data='[
            { value: 'java', label: 'Java' },
            { value: 'js', label: 'JavaScript' },
            { value: 'cpp', label: 'C++' }
          ]'
          @change='v=> example = v'
        >Example</l-dropdown>
      `
    " />
    <div style="width: 280px;">
      <l-dropdown
        :value="example"
        :data="[
          { value: 'java', label: 'Java' },
          { value: 'js', label: 'JavaScript' },
          { value: 'cpp', label: 'C++' }
        ]"
        @change="v=> example = v"
      />
    </div>
  </div>
</template>
