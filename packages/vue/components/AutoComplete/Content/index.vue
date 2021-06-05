<script>
  export default {
    name: 'auto-complete-content',
    components: {
      'l-menu': () => import('../../Menu'),
    },
    props: {
      active: { type: String, default: '' },
      data: { type: Array, default: ()=> ([]) },
      onChange: { type: Function }
    }
  }
</script>

<template>
  <l-menu
    variant='vertical'
    :active='active'
    :_onChange='onChange'
  >
    <l-menu-item
      :key="item.value"
      v-for='item in data'
      :value='item.value'
    >{{item.label}}</l-menu-item>
  </l-menu>
</template>
