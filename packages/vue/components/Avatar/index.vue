<script>
  import Guide from './Guide';
  import s from './index.scss';

  export default {
    Guide,
    name: 'Avatar',
    props: {
      size: String,
      shape: String,
      src: String
    },
    methods: {
      getStyle() {
        let style = '';
        if (this.$props.src) {
          style = `background-image: url(${this.$props.src})`;
        }

        return style;
      }
    },
    data: () => {
      return { s }
    }
  }
</script>

<template>
  <div
    :class="[s.avatar, s[size || 'm'], s[shape || 'circle']]"
    :style="getStyle()"
  />
</template>
