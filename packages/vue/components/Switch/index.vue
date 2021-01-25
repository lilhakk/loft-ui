<script>
  import Guide from './Guide';
  import s from '../../../common/Switch/index.scss';

  export default {
    Guide,
    name: 'l-switch',
    props: {
      selected: { type: Boolean, default: false }
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div :class="[s.switch, { [s.active]: selected }]">
    <div :class="s.circle" />
  </div>
</template>
