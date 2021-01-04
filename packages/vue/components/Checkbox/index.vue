<script>
  import Guide from './Guide';
  import s from './index.scss';

  export default {
    name: 'Checkbox',
    Guide,
    props: {
      selected: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return { s };
    }
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
