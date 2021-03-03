<script>
  import s from '../../../../common/Menu/index.scss';

  // nested
  // this.parent.nested + 8
  export default {
    name: 'l-menu-item',
    inject: ['store', 'onChange'],
    props: {
      to: String,
      active: Boolean,
      value: String
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <router-link
    v-if="!!to"
    :to="to"
    :class="[s.menuItem, { [s.menuItemActive]: active || (store.active === value) }]"
  >
    <slot />
  </router-link>

  <div
    v-else
    :class="[s.menuItem, {
      [s.menuItemActive]: store.active === value
    }]"
    @click="()=> onChange(value, $slots.default[0].text)"
  >
    <slot />
  </div>
</template>
