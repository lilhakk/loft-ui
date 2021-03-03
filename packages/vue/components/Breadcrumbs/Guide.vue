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
      },
      getCodeCustomExample() {
        return `<l-breadcrumbs
        :separator="{
           data: ()=> ({
            separatorStyle: \`
              width: 4px;
              height: 4px;
              background-color: #000000;
            \`
          }),
          template: \`<div :style='separatorStyle' />\`
        }"
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

    <h2>Кастомный сепаратор</h2>
    <p>Можно применить любой разделитель с помощью jsx</p>
    <Code :v="getCodeCustomExample()" lang="html" />
    <l-breadcrumbs
      :separator="{
        data: ()=> ({
          separatorStyle: `
            width: 4px;
            height: 4px;
            background-color: #000000;
            margin: 0 8px;
          `
        }),
        template: `<div :style='separatorStyle' />`
      }"
      :data="[
        { link: '/breadcrumbs', title: 'Главная' },
        { link: '/breadcrumbs', title: 'Меню' },
        { link: '/breadcrumbs', title: 'Салаты' }
      ]"
    />
  </div>
</template>
