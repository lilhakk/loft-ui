<script>
  import s from '../../../../common/Breadcrumbs/Separator/index.scss';

  export default {
    name: 'l-breadcrumbs-separator',
    props: {
      separator: Object
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <component
    v-if="separator"
    :is="separator"
  />
  <div
    v-else
    :class="s.breadcrumbsSeparator"
  />
</template>
