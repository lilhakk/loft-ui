<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-menu': ()=> import('./')
    },
    data: ()=> ({
      horizontal: '',
      vertical: '',
      list: ''
    })
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
        <l-menu
          :active='active'
          @change='v=> active = v'
        >
          <l-menu-item value='home'>Главная</l-menu-item>
          <l-menu-item value='about'>О нас</l-menu-item>
          <l-menu-item value='news'>Новости</l-menu-item>
          <l-menu-item value='contacts'>Контакты</l-menu-item>
        </l-menu>
      `
    " lang="html" />
    <l-menu
      :active="horizontal"
      @change="v=> horizontal = v"
    >
      <l-menu-item value='home'>Главная</l-menu-item>
      <l-menu-item value='about'>О нас</l-menu-item>
      <l-menu-item value='news'>Новости</l-menu-item>
      <l-menu-item value='contacts'>Контакты</l-menu-item>
    </l-menu>

    <h2>Вертикальное меню</h2>
    <Code v="
      data: ()=> ({ active: '' }),
      template: `
        <l-menu
          variant='vertical'
          :active='active'
          @change='v=> active = v'
        >
          <l-menu-item value='home'>Главная</l-menu-item>
          <l-menu-item value='about'>О нас</l-menu-item>
          <l-menu-item value='news'>Новости</l-menu-item>
          <l-menu-item value='contacts'>Контакты</l-menu-item>
        </l-menu>
      `
    " lang="html" />
    <l-menu
      variant="vertical"
      style="width: 200px;"
      :active="vertical"
      @change="v=> vertical = v"
    >
      <l-menu-item value='home'>Главная</l-menu-item>
      <l-menu-item value='about'>О нас</l-menu-item>
      <l-menu-item value='news'>Новости</l-menu-item>
      <l-menu-item value='contacts'>Контакты</l-menu-item>
    </l-menu>

    <h2>Меню с выпадающим списком</h2>
    <Code v="
      data: ()=> ({ active: '' }),
      template: `
        <l-menu
          variant='vertical'
          :active='active'
          @change='v=> active = v'
        >
          <l-menu-item value='home'>Главная</l-menu-item>
          <l-menu-item value='about'>О нас</l-menu-item>
          <l-menu-list title='Задания'>
            <l-menu-item value='js'>JavaScript</l-menu-item>
            <l-menu-item value='cpp'>C++</l-menu-item>
            <l-menu-item value='golang'>Golang</l-menu-item>
          </l-menu-list>
          <l-menu-item value='contacts'>Контакты</l-menu-item>
        </l-menu>
      `
    " lang="html" />
    <l-menu
      variant="vertical"
      style="width: 200px;"
      :active="list"
      @change="v=> list = v"
    >
      <l-menu-item value='home'>Главная</l-menu-item>
      <l-menu-item value='about'>О нас</l-menu-item>
      <l-menu-list title='Задания'>
        <l-menu-item value='js'>JavaScript</l-menu-item>
        <l-menu-item value='cpp'>C++</l-menu-item>
        <l-menu-item value='golang'>Golang</l-menu-item>
      </l-menu-list>
      <l-menu-item value='contacts'>Контакты</l-menu-item>
    </l-menu>
  </div>
</template>
