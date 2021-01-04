<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Loader from './';

  export default {
    components: {
      I, Code,
      Loader: () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Loader</h1>
    <p>Индикатор загрузки, информирует пользователя что в данный момент что-то подгружается или обрабатывается</p>
    <Code v="import { Loader } from 'loft-ui'" />

    <h2>Простой пример</h2>
    <Code v="<Loader />" lang="html" />
    <Loader />

    <h2>Варианты дизайна</h2>
    <Code v="
      <Loader variant='circle' />
      <Loader variant='dots' />
    " lang="html" />
    <div style="display: flex; align-items: center;">
      <Loader variant='circle' />
      <Loader variant='dots' style="margin-left: 8;" />
    </div>

    <h2>Размеры</h2>
    <Code v="
      <Loader variant='circle' size='xl' />
      <Loader variant='circle' size='l' />
      <Loader variant='circle' size='m' />
      <Loader variant='circle' size='s' />

      <Loader variant='dots' size='xl' />
      <Loader variant='dots' size='l' />
      <Loader variant='dots' size='m' />
      <Loader variant='dots' size='s' />
    " lang="html" />
    <div style="display: flex;">
      <Loader variant='circle' size='xl' />
      <Loader variant='circle' size='l' />
      <Loader variant='circle' size='m' />
      <Loader variant='circle' size='s' />
    </div>
    <div style="display: flex; margin-top: 36px;">
      <Loader variant='dots' size='xl' style="margin-right: 24px;" />
      <Loader variant='dots' size='l' style="margin-right: 24px;" />
      <Loader variant='dots' size='m' style="margin-right: 24px;" />
      <Loader variant='dots' size='s' />
    </div>

    <h2>Цвет</h2>
    <p>Можно пременить любой цвет, передавая его в проп <I>color</I></p>
    <Code v="
      <Loader variant='circle' color='green' />
      <Loader variant='circle' color='#a02338' />
      <Loader variant='dots' color='#888888' />
    " lang="html" />
    <div style="display: flex; align-items: center;">
      <Loader variant='circle' color='green' />
      <Loader variant='circle' color='#a02338' />
      <Loader variant='dots' color='#888888' style="margin-left: 8px;" />
    </div>
  </div>
</template>
