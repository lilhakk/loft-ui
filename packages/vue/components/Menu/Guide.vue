<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-menu': () => import('./')
    },
    data() {
      return {
        horizontalActive: '',
        verticalActive: ''
      }
    }
  }
</script>

<template>
  <div>
    <h1>Menu</h1>
    <Code v="import { l-menu } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({ active: '' }),
      template: `
        <l-menu :active='active'>
          <l-menu-item value='home'>Главная</l-menu-item>
          <l-menu-item value='about'>О нас</l-menu-item>
          <l-menu-item value='news'>Новости</l-menu-item>
          <l-menu-item value='contacts'>Контакты</l-menu-item>
        </l-menu>
      `
    " lang="html" />
    <l-menu :active="horizontalActive">
      <l-menu-item value='home'>Главная</l-menu-item>
      <l-menu-item value='about'>О нас</l-menu-item>
      <l-menu-item value='news'>Новости</l-menu-item>
      <l-menu-item value='contacts'>Контакты</l-menu-item>
    </l-menu>

    <h2>Вертикальное меню</h2>
    <Code v="
      data: ()=> ({ active: '' }),
      template: `
        <l-menu variant='vertical' :active='active'>
          <l-menu-item value='home'>Главная</l-menu-item>
          <l-menu-item value='about'>О нас</l-menu-item>
          <l-menu-item value='news'>Новости</l-menu-item>
          <l-menu-item value='contacts'>Контакты</l-menu-item>
        </l-menu>
      `
    " lang="html" />
    <l-menu
      variant='vertical'
      style="width: 200px;"
      :active="verticalActive"
    >
      <l-menu-item value='home'>Главная</l-menu-item>
      <l-menu-item value='about'>О нас</l-menu-item>
      <l-menu-item value='news'>Новости</l-menu-item>
      <l-menu-item value='contacts'>Контакты</l-menu-item>
    </l-menu>

  </div>
</template>
