<script>
  import Guide from './Guide';
  import s from '../../../common/Radio/index.scss';

  export default {
    Guide,
    name: 'l-radio-item',
    props: {
      value: { type: String }
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div
    :class="[s.radio, { [s.active]: $parent.active === value }]"
    v-on:click="$parent.active = value"
  >
    <div :class="s.iconCase">
      <div :class="s.icon" />
    </div>
    <div :class="s.label">
      <slot />
    </div>
  </div>
</template>
