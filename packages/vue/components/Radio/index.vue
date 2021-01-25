<script>
  import Guide from './Guide';
  import s from '../../../common/Radio/index.scss';

  export default {
    Guide,
    name: 'l-radio',
    props: {
      active: { type: String }
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div :class="s.radioCase">
    <slot />
  </div>
</template>
