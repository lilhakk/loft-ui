<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      Avatar: () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Avatar</h1>
    <p>Компонент для отображения изображения профиля пользователя</p>
    <Code v="import { Avatar } from 'loft-ui'" />

    <h2>Простой пример</h2>
    <p>Если никаких параметров не установлено, отображается fallback картинка</p>
    <Code v="<Avatar />" lang="html" />
    <Avatar style="background-color: #eee;" />
  
    <h2>Ссылка на изображение</h2>
    <p>Чтобы применить изображение, нужно передать ссылку в проп <I>src</I></p>
    <Code v="<Avatar src='...' />" lang="html" />
    <Avatar src='https://pbs.twimg.com/profile_images/954130745341173760/4nqA97Tl_400x400.jpg' />

    <h2>Размеры</h2>
    <p>Есть 4 варианта размеров: <I>xl</I>, <I>l</I>, <I>m</I>, <I>s</I> (по умолчанию - <I>m</I>)</p>
    <Code v="
      <Avatar size='xl' />
      <Avatar size='l' />
      <Avatar size='m' />
      <Avatar size='s' />
    " lang="html" />
    <div style="display: flex;">
      <Avatar size='xl' style="background-color: '#eee'; margin-right: 8px;" />
      <Avatar size='l' style="background-color: '#eee'; margin-right: 8px;" />
      <Avatar size='m' style="background-color: '#eee'; margin-right: 8px;" />
      <Avatar size='s' style="background-color: '#eee'; margin-right: 8px;" />
    </div>

    <h2>Форма</h2>
    <p>По умолчанию - <I>circle</I></p>
    <Code v="
      <Avatar shape='circle' />
      <Avatar shape='square' />
    " lang="html" />
    <div style="display: flex;">
      <Avatar shape='circle' style="background-color: #eee; margin-right: 8px;" />
      <Avatar shape='square' style="background-color: #eee; margin-right: 8px;" />
    </div>
  </div>
</template>
