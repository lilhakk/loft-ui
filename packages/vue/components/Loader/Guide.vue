<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-loader': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Loader</h1>
    <p>Индикатор загрузки, информирует пользователя что в данный момент что-то подгружается или обрабатывается</p>
    <Code v="import { l-loader } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="<l-loader />" lang="html" />
    <l-loader />

    <h2>Варианты дизайна</h2>
    <Code v="
      <l-loader variant='circle' />
      <l-loader variant='dots' />
    " lang="html" />
    <div style="display: flex; align-items: center;">
      <l-loader variant='circle' />
      <l-loader variant='dots' style="margin-left: 8;" />
    </div>

    <h2>Размеры</h2>
    <Code v="
      <l-loader variant='circle' size='xl' />
      <l-loader variant='circle' size='l' />
      <l-loader variant='circle' size='m' />
      <l-loader variant='circle' size='s' />

      <l-loader variant='dots' size='xl' />
      <l-loader variant='dots' size='l' />
      <l-loader variant='dots' size='m' />
      <l-loader variant='dots' size='s' />
    " lang="html" />
    <div style="display: flex;">
      <l-loader variant='circle' size='xl' />
      <l-loader variant='circle' size='l' />
      <l-loader variant='circle' size='m' />
      <l-loader variant='circle' size='s' />
    </div>
    <div style="display: flex; margin-top: 36px;">
      <l-loader variant='dots' size='xl' style="margin-right: 24px;" />
      <l-loader variant='dots' size='l' style="margin-right: 24px;" />
      <l-loader variant='dots' size='m' style="margin-right: 24px;" />
      <l-loader variant='dots' size='s' />
    </div>

    <h2>Цвет</h2>
    <p>Можно пременить любой цвет, передавая его в проп <I>color</I></p>
    <Code v="
      <l-loader variant='circle' color='green' />
      <l-loader variant='circle' color='#a02338' />
      <l-loader variant='dots' color='#888888' />
    " lang="html" />
    <div style="display: flex; align-items: center;">
      <l-loader variant='circle' color='green' />
      <l-loader variant='circle' color='#a02338' />
      <l-loader variant='dots' color='#888888' style="margin-left: 8px;" />
    </div>
  </div>
</template>
