<script>
  import { Code, InlineCode as I } from '../../helpers';

  const Example = {
    components: { 'l-pagination': () => import('./') },
    data: ()=> ({ page: 3 }),
    template: `
      <l-pagination
        :count="10"
        :page="page"
      />
    `
  }

  export default {
    components: {
      I, Code,
      Example,
      'l-pagination': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Pagination</h1>
    <p>Компонент для переключения между частями контента</p>
    <Code v="import { l-pagination } from 'loft-ui'" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({ page: 3 }),
      template: `
        <l-pagination
          :count='10'
          :page='page'
        />
      `
    " lang="html" />
    <Example />
  </div>
</template>
