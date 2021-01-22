<script>
  import s from '../../../../common/Menu/index.scss';

  export default {
    name: 'l-menu-list',
    props: {
      title: String
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div>
    <slot />
  </div>
</template>
