<script>
  import Guide from './Guide';
  import s from '../../../common/Menu/index.scss';

  export default {
    Guide,
    name: 'l-menu',
    props: {
      variant: { type: String, default: 'horizontal' },
      active: { type: String, default: '' }
    },
    provide: function() {
      const store = {}

      Object.defineProperty(store, 'active', {
        enumerable: true,
        get: () => this.active
      })

      return {
        store,
        onChange: this.onChange
      }
    },
    methods: {
      onChange(value, label) {
        this.$emit('change', value, label);
      }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div :class="[s.menu, s[variant]]">
    <slot />
  </div>
</template>
