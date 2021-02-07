<script>
  import Guide from './Guide';

  export default {
    Guide,
    name: 'l-drawer',
    components: {
      'l-drawer-fixed': () => import('./variants/Fixed')
      //'l-drawer-static': () => import('./variants/Static')
    },
    props: {
      variant: { type: String, default: 'fixed' },
      visible: { type: Boolean, default: false },
      onDismiss: { type: Function }
    }
  }
</script>

<template>
  <l-drawer-fixed
    :visible="visible"
    :onDismiss="onDismiss"
  >
    <slot />
  </l-drawer-fixed>
</template>
