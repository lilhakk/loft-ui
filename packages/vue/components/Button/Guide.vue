<script>
  import { Code, InlineCode as I } from '../../helpers';

  const Example = {
    components: { 'l-button': () => import('./') },
    data: () => ({ count: 0 }),
    template: `
      <l-button @click.native="count++">
        Clicked {{count}} times!
      </l-button>
    `
  }

  export default {
    components: {
      I, Code,
      Example,
      'l-button': () => import('./')
    }
  }
</script>

<template>
  <div>
    <h1>Button</h1>
    <p>Кнопка - элемент при нажатии на которую происходит какое-то действие</p>
    <Code v="import { l-button } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <Code v="
      data: () => ({ count: 0 }),
      template: `
        <l-button @click.native='count++'>
          Clicked <<count>> times!
        </l-button>
      `
    " />
    <Example />

    <h2>Варианты</h2>
    <Code v="
      <l-button variant='default'>Default</l-button>
      <l-button variant='line'>Line</l-button>
      <l-button variant='text'>Text</l-button>
    " lang="html" />
    <div style="display: flex;">
      <l-button variant="default" style="margin-right: 8px;">Default</l-button>
      <l-button variant="line" style="margin-right: 8px;">Line</l-button>
      <l-button variant="text">Text</l-button>
    </div>

    <h2>Размеры</h2>
    <Code v="
      <l-button size='m'>Middle</l-button>
      <l-button size='s'>Small</l-button>
    " lang="html" />
    <div style="display: flex;">
      <l-button size="m" style="margin-right: 8px;">Middle</l-button>
      <l-button size="s">Small</l-button>
    </div>

    <h2>Загрузка</h2>
    <p>Проп <I>loading</I> отвечает за статус загрузки. По умолчанию - <I>false</I></p>
    <Code
      v='<l-button loading="true">Loading</l-button>'
      lang="html"
    />
    <l-button loading="true">Loading</l-button>
  </div>
</template>
