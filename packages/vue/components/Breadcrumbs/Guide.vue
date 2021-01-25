<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    methods: {
      getCodeExample() {
        return `<l-breadcrumbs
        :data="[
          { link: '/breadcrumbs', title: 'Главная' },
          { link: '/breadcrumbs', title: 'Меню' },
          { link: '/breadcrumbs', title: 'Салаты' }
        ]"
      />`
      }
    },
    components: {
      I, Code,
      'l-breadcrumbs': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Breadcrumbs</h1>
    <p>Хлебные крошки, используются для того чтобы пользователь лучше понимал локацию местонахождения на сайте</p>
    <Code v="import { l-breadcrumbs } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code :v="getCodeExample()" lang="html" />
    <l-breadcrumbs
      :data="[
        { link: '/breadcrumbs', title: 'Главная' },
        { link: '/breadcrumbs', title: 'Меню' },
        { link: '/breadcrumbs', title: 'Салаты' }
      ]"
    />
  </div>
</template>
