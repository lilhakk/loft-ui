<script>
  import { Code, InlineCode as I } from '../../helpers';
  import s from '../../../common/Popover/guide.scss';

  export default {
    components: {
      I, Code,
      'l-popover': ()=> import('./')
    },
    data: ()=> ({
      s,
      example: false
    })
  }
</script>

<template>
  <div>
    <h1>Popover</h1>
    <Code v="import { l-popover } from 'loft-ui';" />

    <h2>Простой пример</h2>
    <l-popover
      :className="s.example"
      :visible="example"
      :content="{
        components: {
          'l-button': ()=> import('../Button')
        },
        data: ()=> ({ s }),
        template: `
          <div>
            <div :class='s.exampleTitle'>Notifications</div>
            <div :class='s.exampleList'>
              <div :class='s.exampleItem'>
                <div :class='s.exampleAvatar' />
                <div :class='s.exampleItemText'>
                  <div :class='s.exampleItemTitle'>Уведомление</div>
                  <div :class='s.exampleItemDesc'>Задача организации, в особенно...</div>
                </div>
              </div>
              <div :class='s.exampleItem'>
                <div :class='s.exampleAvatar' />
                <div :class='s.exampleItemText'>
                  <div :class='s.exampleItemTitle'>Уведомление</div>
                  <div :class='s.exampleItemDesc'>Задача организации, в особенно...</div>
                </div>
              </div>
              <div :class='s.exampleItem'>
                <div :class='s.exampleAvatar' />
                <div :class='s.exampleItemText'>
                  <div :class='s.exampleItemTitle'>Уведомление</div>
                  <div :class='s.exampleItemDesc'>Задача организации, в особенно...</div>
                </div>
              </div>
            </div>
            <div :class='s.exampleActionCase'>
              <l-button :class='s.exampleAction'>
                Read all notifications
              </l-button>
            </div>
          </div>
        `
      }"
    >
      <div
        :class="[s.exampleIcon, { [s.exampleIconActive]: example }]"
        @click="example = !example"
      />
    </l-popover>
  </div>
</template>
