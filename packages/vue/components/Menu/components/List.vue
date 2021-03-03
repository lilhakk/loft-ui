<script>
  import s from '../../../../common/Menu/index.scss';

  // nested
  // this.parent.nested + 8
  export default {
    name: 'l-menu-list',
    props: {
      title: String
    },
    components: {
      'l-collapse': ()=> import('../../Collapse')
    },
    data() {
      return {
        s,
        isShow: false
      }
    }
  }
</script>

<template>
  <div :class="[{ [s.listActive]: isShow }]">
    <div
      :class="[s.listTitle, { [s.listTitleActive]: isShow }]"
      @click="()=> isShow = !isShow"
    >
      <span>{{title}}</span>
      <div :class="[s.arrow, { [s.arrowActive]: isShow }]">
        <div :class="s.line" />
        <div :class="s.line" />
      </div>
    </div>

    <l-collapse :visible="isShow">
      <slot />
    </l-collapse>
  </div>
</template>
