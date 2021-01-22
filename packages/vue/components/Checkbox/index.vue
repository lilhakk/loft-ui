<script>
  import Guide from './Guide';
  import s from '../../../common/Checkbox/index.scss';

  export default {
    name: 'l-checkbox',
    Guide,
    props: {
      selected: { type: Boolean, default: false }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div :class="[s.checkbox, { [s.active]: selected }]">
    <div :class="s.iconCase">
      <div :class="s.icon" />
    </div>
    <div :class="s.label">
      <slot />
    </div>
  </div>
</template>
