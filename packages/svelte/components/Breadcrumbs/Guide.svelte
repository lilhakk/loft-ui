<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Breadcrumbs from './Breadcrumbs';
</script>

<h1>Breadcrumbs</h1>
<p>Хлебные крошки, используются для того чтобы пользователь лучше понимал локацию местонахождения на сайте</p>
<Code v={`import { Breadcrumbs } from 'loft-ui';`} lang='js' />

<h2>Простой пример</h2>
<Code v={`
  <Breadcrumbs
    data={[
      { link: '/breadcrumbs', title: 'Главная' },
      { link: '/breadcrumbs', title: 'Меню' },
      { link: '/breadcrumbs', title: 'Салаты' }
    ]}
  />
`} />
<Breadcrumbs
  data={[
    { link: '/svelte/breadcrumbs', title: 'Главная' },
    { link: '/svelte/breadcrumbs', title: 'Меню' },
    { link: '/svelte/breadcrumbs', title: 'Салаты' }
  ]}
/>
