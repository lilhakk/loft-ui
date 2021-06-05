<script>
  import Guide from './Guide';
  import s from '../../../common/Breadcrumbs/index.scss';

  export default {
    Guide,
    name: 'l-breadcrumbs',
    components: {
      'l-breadcrumbs-separator': () => import('./Separator')
    },
    props: {
      data: { type: Array, default: [] },
      separator: { type: Object }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div :class="s.breadcrumbs">
    <template v-for="item, index in data">
      <div
        v-if="index + 1 === data.length"
        :class="[s.breadcrumbsTitle, s.breadcrumbsTitleActive]"
      >{{item.title}}</div>

      <router-link
        :to="item.link"
        v-if="index + 1 !== data.length"
        :class="s.breadcrumbsTitle"
      >{{item.title}}</router-link>

      <l-breadcrumbs-separator
        v-if="index + 1 !== data.length"
        :separator="separator"
      />
    </template>
  </div>
</template>
