<script>
  import { Code, InlineCode as I } from '../../helpers';

  export default {
    components: {
      I, Code,
      'l-button': () => import('../Button'),
      'l-collapse': () => import('./')
    },
    data: ()=> ({
      visible: false,
      visible2: false
    })
  }
</script>

<template>
  <div>
    <h1>Сollapse</h1>
    <p>Компонент чтобы скрыть содержимое и отображать по событию</p>
    <Code v="import { l-collapse } from 'loft-ui'" />

    <h2>Простой пример</h2>
    <Code v="
      data: ()=> ({
        visible: false,
        visible2: false
      }),
      template: `
        <div>
          <l-collapse :visible='visible'>
            <h3>Заголовок 1</h3>
            <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>

            <l-collapse :visible='visible2'>
              <h3>Заголовок 2</h3>
              <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>
            </l-collapse>
          </l-collapse>
          <l-button @click.native='visible = !visible'>???</l-button>
        </div>
      `
    " />
    <l-collapse :visible="visible">
      <div style="padding: 8px; box-sizing: border-box;">
        <h3>Заголовок 1</h3>
        <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>

        <l-collapse :visible="visible2">
          <h3 style="margin-top: 16px;">Заголовок 2</h3>
          <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>
        </l-collapse>
        <l-button @click.native="visible2 = !visible2">
          {{ visible2 ? 'Скрыть' : 'Показать' }}
        </l-button>
      </div>
    </l-collapse>
    <l-button @click.native="visible = !visible">
      {{ visible ? 'Скрыть' : 'Показать' }}
    </l-button>
  </div>
</template>
