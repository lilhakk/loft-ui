<script>
  import Guide from './Guide';
  import Content from './Content';
  import s from '../../../common/AutoComplete/index.scss';

  export default {
    Guide,
    name: 'l-autoComplete',
    props: {
      value: { type: Object, default: ()=> ({}) },
      data: { type: Array, default: ()=> ([]) },
      label: { type: String, default: 'Select value' },
      onChange: { type: Function }
    },
    components: {
      'l-popover': () => import('../Popover'),
      'l-input': () => import('../Input')
    },
    computed: {
      dataFilter() {
        return this.data.filter(item => {
          return this.inputValue
            ? !!item.label.match(new RegExp('^' + this.inputValue, 'gi'))
            : true;
        });
      },
      content: ()=> Content,
      contentProps() {
        return {
          data: this.dataFilter,
          active: this.value.value,
          onChange: (value, label)=> {
            this.onChange({ value, label })
          }
        }
      }
    },
    data: ()=> ({
      s,
      inputValue: '',
      showPopover: false
    })
  }
</script>

<template>
  <l-popover
    :className="s.popover"
    :visible="showPopover"
    :hasWidthCaption="true"
    :content="content"
    :contentProps="contentProps"
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
