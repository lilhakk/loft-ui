<script>
  import Guide from './Guide';
  import s from './index.scss';

  export default {
    Guide,
    name: 'Button',
    props: {
      size: String,
      variant: String,
      loading: Boolean
    },
    data: () => {
      return { s }
    }
  }
</script>

<template>
  <div
    :class="[s.button, s[size || 'm'], s[variant || 'default']]"
  >
    <slot></slot>
  </div>
</template>
