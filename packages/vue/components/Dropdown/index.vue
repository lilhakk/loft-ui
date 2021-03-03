<script>
  import Guide from './Guide';
  import s from '../../../common/Dropdown/index.scss';

  export default {
    Guide,
    name: 'l-dropdown',
    components: {
      'l-popover': ()=> import('../Popover'),
      'l-menu': ()=> import('../Menu'),
      'l-input': ()=> import('../Input')
    },
    props: {
      label: { type: String, default: 'Select value' },
      data: { type: Array, default: ()=> [] },
      value: String
    },
    computed: {
      content() {
        return {
          data: ()=> ({ data: this.data, active: this.value }),
          methods: {
            onChange: (value, label) => {
              this.visible = false;
              this.activeLabel = label;
              this.$emit('change', value);
            }
          },
          template: `
            <l-menu
              variant="vertical"
              :active="active"
              @change="onChange"
            >
              <l-menu-item
                v-for="item in data"
                :value="item.value"
              >{{item.label}}</l-menu-item>
            </l-menu>
          `
        }
      }
    },
    data: ()=> ({
      s,
      visible: false,
      activeLabel: ''
    })
  }
</script>

<template>
  <l-popover
    :visible="visible"
    :content="content"
    :class="s.content"
    :hasWidthCaption="true"
  >
    <div
      :class="[s.dropdownCaption, {
        [s.dropdownActive]: visible,
        [s.dropdownSelect]: !!value
      }]"
    >
      <div
        :class="s.dropdownHandler"
        @click="()=> visible = !visible"
      />

      <l-input
        :label="label"
        :value="activeLabel"
        variant="outline"
      />

      <div :class="s.dropdownIcon">
        <div :class="s.line" />
        <div :class="s.line" />
      </div>
    </div>
  </l-popover>
</template>
