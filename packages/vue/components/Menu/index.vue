<script>
  import Guide from './Guide';
  import s from '../../../common/Menu/index.scss';

  export default {
    Guide,
    name: 'l-menu',
    props: {
      variant: { type: String, default: 'horizontal' },
      active: { type: String, default: '' },
      onChange: Function
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div :class="[s.menu, s[variant]]">
    <slot />
  </div>
</template>
