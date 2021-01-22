<script>
  import s from '../../../../common/Menu/index.scss';

  export default {
    name: 'l-menu-item',
    props: {
      to: String,
      active: Boolean,
      value: String
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <router-link
    v-if="!!to"
    :to="to"
    :class="[s.menuItem, {
      [s.menuItemActive]: (value && $parent.active === value) || (active === true)
    }]"
  >
    <slot />
  </router-link>
  <div
    v-else
    :class="[s.menuItem, {
      [s.menuItemActive]: (value && $parent.active === value) || (active === true)
    }]"
    v-on:click="$parent.onChange(value)"
  >
    <slot />
  </div>
</template>
