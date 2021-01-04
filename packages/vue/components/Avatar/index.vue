<script>
  import Guide from './Guide';
  import s from './index.scss';

  export default {
    Guide,
    name: 'Avatar',
    props: {
      size: { type: String, default: 'm' },
      shape: { type: String, default: 'circle' },
      src: String
    },
    data() {
      let style = '';
      if (this.$props.src) {
        style = `background-image: url(${this.$props.src})`;
      }

      return { s, style }
    }
  }
</script>

<template>
  <div
    :class="[s.avatar, s[size], s[shape]]"
    :style="style"
  />
</template>
