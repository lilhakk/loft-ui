<script>
  import Guide from './Guide';
  import s from '../../../common/AutoComplete/index.scss';

  // fix name
  export default {
    Guide,
    name: 'l-autoComplete',
    props: {
      value: { type: Object, default: ()=> ({}) },
      data: { type: Array, default: ()=> ([]) },
      label: { type: String, default: 'Select value' }
    },
    components: {
      'l-popover': () => import('../Popover'),
      'l-input': () => import('../Input'),
      'l-menu': () => import('../Menu')
    },
    data() {
      return {
        s,
        inputValue: '',
        showPopover: false
      }
    }
  }
  // max height popover
</script>

<template>
  <l-popover
    :className="s.popover"
    :visible="showPopover"
    :content="{
      computed: {
        dataFilter() {
          return data.filter(item => {
            return inputValue
              ? !!item.label.match(new RegExp('^' + inputValue, 'gi'))
              : true;
          });
        }
      },
      template: `
        <l-menu
          variant='vertical'
        >
          <l-menu-item
            v-for='item in dataFilter'
          >{{item.label}}</l-menu-item>
        </l-menu>
      `
    }"
    :hasWidthCaption="true"
  >
    <l-input
      variant="outline"
      :label="label"
      :value="showPopover ? inputValue : value.label"
      @input="inputValue = $event.target.value"
      @focus="showPopover = true"
      @blur="showPopover = false"
    />
  </l-popover>
</template>
