<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Pagination from './';

  const Example = {
    components: { Pagination: () => import('./') },
    data: ()=> ({ page: 3 }),
    template: `
      <Pagination
        :count="10"
        :page="page"
        :onChange="v=> page = v"
      />
    `
  }

  export default {
    components: {
      I, Code,
      Example,
      Pagination: () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Pagination</h1>
    <p>Компонент для переключения между частями контента</p>
    <Code v="import { Pagination } from 'loft-ui'" />

    <h2>Пример</h2>
    <Code v="
      components: { Pagination },
      data: ()=> ({ page: 3 }),
      template: `
        <Pagination
          :count='10'
          :page='page'
          :onChange='v=> page = v'
        />
      `
    " />
    <Example />
  </div>
</template>
