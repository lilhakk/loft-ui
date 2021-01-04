<script>
  import { Code, InlineCode as I } from '../../helpers';

  const Example = {
    components: { Button: () => import('./') },
    data: () => ({ count: 0 }),
    template: `
      <Button @click.native="count++">
        Clicked {{count}} times!
      </Button>
    `
  }

  export default {
    components: {
      I, Code,
      Example,
      Button: () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Button</h1>
    <p>Кнопка - элемент при нажатии на которую происходит какое-то действие</p>
    <Code v="import { Button } from 'loft-ui'" />

    <h2>Пример</h2>
    <Code v="
      components: { Button },
      data: () => ({ count: 0 }),
      template: `
        <Button @click.native='count++'>
          Clicked <<count>> times!
        </Button>
      `
    " />
    <Example />

    <h2>Варианты</h2>
    <Code v="
      <Button variant='default'>Default</Button>
      <Button variant='line'>Line</Button>
      <Button variant='text'>Text</Button>
    " lang="html" />
    <div style="display: flex;">
      <Button variant="default" style="margin-right: 8px;">Default</Button>
      <Button variant="line" style="margin-right: 8px;">Line</Button>
      <Button variant="text">Text</Button>
    </div>

    <h2>Размеры</h2>

    <h2>Загрузка</h2>
    <p>Проп <I>loading</I> отвечает за статус загрузки. По умолчанию - <I>false</I></p>
    <Code
      v='<Button loading="true">Loading</Button>'
      lang="html"
    />
    <Button loading="true">Loading</Button>
  </div>
</template>
