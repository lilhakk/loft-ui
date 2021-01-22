<script>
  import { Code, InlineCode as I } from '../../helpers';
  import s from '../../../common/Avatar/guide.scss';

  export default {
    components: {
      I, Code,
      'l-avatar': () => import('./'),
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div>
    <h1>Avatar</h1>
    <p>Компонент для отображения изображения профиля пользователя</p>
    <Code v="import { l-avatar } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <p>Если никаких параметров не установлено, отображается fallback картинка</p>
    <Code v="<l-avatar />" lang="html" />
    <l-avatar :class="s.bg" />
  
    <h2>Ссылка на изображение</h2>
    <p>Чтобы применить изображение, нужно передать ссылку в проп <I>src</I></p>
    <Code v="<l-avatar src='...' />" lang="html" />
    <l-avatar src="/res/img/avatar_example.jpg" />

    <h2>Размеры</h2>
    <p>Есть 4 варианта размеров: <I>xl</I>, <I>l</I>, <I>m</I>, <I>s</I> (по умолчанию - <I>m</I>)</p>
    <Code v="
      <l-avatar size='xl' />
      <l-avatar size='l' />
      <l-avatar size='m' />
      <l-avatar size='s' />
    " lang="html" />
    <div style="display: flex;">
      <l-avatar size='xl' :class="s.bgWithMargin" />
      <l-avatar size='l' :class="s.bgWithMargin" />
      <l-avatar size='m' :class="s.bgWithMargin" />
      <l-avatar size='s' :class="s.bgWithMargin" />
    </div>

    <h2>Форма</h2>
    <p>По умолчанию - <I>circle</I></p>
    <Code v="
      <l-avatar shape='circle' />
      <l-avatar shape='square' />
    " lang="html" />
    <div style="display: flex;">
      <l-avatar shape='circle' :class="s.bgWithMargin" />
      <l-avatar shape='square' :class="s.bgWithMargin" />
    </div>
  </div>
</template>
