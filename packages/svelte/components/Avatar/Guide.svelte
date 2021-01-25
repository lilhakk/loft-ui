<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Avatar from './Avatar';
  import s from '../../../common/Avatar/guide.scss';
</script>

<h1>Avatar</h1>
<p>Компонент для отображения изображения профиля пользователя</p>
<Code v={`import { Avatar } from 'loft-ui';`} lang='js' />

<h2>Простой пример</h2>
<p>Если никаких параметров не установлено, отображается fallback картинка</p>
<Code v={`<Avatar />`} />
<Avatar class={s.bg} />

<h2>Ссылка на изображение</h2>
<p>Чтобы применить изображение, нужно передать ссылку в проп <I>src</I></p>
<Code v={`<Avatar src='...' />`} />
<Avatar src="/res/img/avatar_example.jpg" />

<h2>Размеры</h2>
<p>Есть 4 варианта размеров: <I>xl</I>, <I>l</I>, <I>m</I>, <I>s</I> (по умолчанию - <I>m</I>)</p>
<Code v={`
  <Avatar size='xl' />
  <Avatar size='l' />
  <Avatar size='m' />
  <Avatar size='s' />
`} />
<div style="display: flex;">
  <Avatar size='xl' class={s.bgWithMargin} />
  <Avatar size='l' class={s.bgWithMargin} />
  <Avatar size='m' class={s.bgWithMargin} />
  <Avatar size='s' class={s.bgWithMargin} />
</div>

<h2>Форма</h2>
<p>По умолчанию - <I>circle</I></p>
<Code v={`
  <Avatar shape='circle' />
  <Avatar shape='square' />
`} />
<div style="display: flex;">
  <Avatar shape='circle' class={s.bgWithMargin} />
  <Avatar shape='square' class={s.bgWithMargin} />
</div>
