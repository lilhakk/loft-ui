<script>
  import Guide from './Guide';
  import Loader from '../Loader';
  import s from './index.scss';

  export default {
    Guide,
    name: 'Button',
    components: { Loader },
    props: {
      size: { type: String, default: 'm' },
      variant: { type: String, default: 'default' },
      loading: { type: Boolean, default: false }
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div
    v-if="loading"
    :class="[s.button, s.load, s.m]"
  >
    <Loader variant='dots' />
  </div>

  <div
    v-else
    :class="[s.button, s[size], s[variant]]"
  >
     <slot></slot>
  </div>
</template>
