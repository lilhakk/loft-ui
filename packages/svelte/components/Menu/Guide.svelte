<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Menu from './Menu';

  let horizontal = '';
  let vertical = '';
</script>

<h1>Menu</h1>
<Code v={`import { Menu } from 'loft-ui';`} lang="js" />

<h2>Простой пример</h2>
<Code v={`
  <script>
    let active = '';
  </script>

  <Menu active={active}>
    <Menu.Item value='home'>Главная</Menu.Item>
    <Menu.Item value='about'>О нас</Menu.Item>
    <Menu.Item value='news'>Новости</Menu.Item>
    <Menu.Item value='contants'>Контакты</Menu.Item>
  </Menu>
`} />
<Menu active={horizontal}>
  <Menu.Item value='home'>Главная</Menu.Item>
  <Menu.Item value='about'>О нас</Menu.Item>
  <Menu.Item value='news'>Новости</Menu.Item>
  <Menu.Item value='contants'>Контакты</Menu.Item>
</Menu>

<h2>Вертикальное меню</h2>
<Code v={`
  <script>
    let active = '';
  </script>

  <Menu
    active={active}
    variant='vertical'
  >
    <Menu.Item value='home'>Главная</Menu.Item>
    <Menu.Item value='about'>О нас</Menu.Item>
    <Menu.Item value='news'>Новости</Menu.Item>
    <Menu.Item value='contants'>Контакты</Menu.Item>
  </Menu>
`} />
<Menu
  active={vertical}
  style="width: 200px;"
  variant='vertical'
>
  <Menu.Item value='home'>Главная</Menu.Item>
  <Menu.Item value='about'>О нас</Menu.Item>
  <Menu.Item value='news'>Новости</Menu.Item>
  <Menu.Item value='contants'>Контакты</Menu.Item>
</Menu>
