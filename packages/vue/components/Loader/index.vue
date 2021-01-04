<script>
  import Guide from './Guide';
  import s from './index.scss';

  export default {
    Guide,
    name: 'Loader',
    props: {
      variant: { type: String, default: 'circle' },
      color: { type: String, default: '#3155da' },
      size: { type: String, default: 'm' }
    },
    data() {
      const childStyle = {};
      if (this.$props.variant === 'dots') childStyle.backgroundColor = this.$props.color;
      if (this.$props.variant === 'circle') childStyle.borderTopColor = this.$props.color;

      return { s, childStyle }
    }
  }
</script>

<template>
  <div
    v-if="variant === 'dots'"
    :class="[s.dots, s[size]]"
  >
    <div :class="[s.dotsChild, s[size]]" :style="childStyle" />
    <div :class="[s.dotsChild, s[size]]" :style="childStyle" />
    <div :class="[s.dotsChild, s[size]]" :style="childStyle" />
  </div>

  <div
    v-else
    :class="[s.circle, s[size]]"
  >
    <div :class="s[size]" :style="childStyle" />
    <div :class="s[size]" :style="childStyle" />
    <div :class="s[size]" :style="childStyle" />
    <div :class="s[size]" :style="childStyle" />
  </div>
</template>
