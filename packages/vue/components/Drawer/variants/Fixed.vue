<script>
  import {
    CASE_STYLES,
    POSITION_STYLES_HIDE,
    POSITION_NAMES
  } from '../../../../common/Drawer/constants.json';
  import s from '../../../../common/Drawer/index.scss';

  export default {
    methods: {
      enter(el) {
        const positionName = POSITION_NAMES[this.position];
        const positionStyle = POSITION_STYLES_HIDE[this.position];
        const body = document.body;

        this.$refs.drawer.style = `transform: ${positionName}(${positionStyle});`;
        this.$refs.overlay.style = 'opacity: 0;';

        body.append(el);
        setTimeout(()=> {
          this.$refs.drawer.style = `transform: ${positionName}(0);`;
          this.$refs.overlay.style = 'opacity: 1;';
        }, 0);
      },
      leave() {
        const positionName = POSITION_NAMES[this.position];
        const positionStyle = POSITION_STYLES_HIDE[this.position];

        this.$refs.drawer.style = `transform: ${positionName}(${positionStyle});`;
        this.$refs.overlay.style = 'opacity: 0;';
      }
    },
    props: {
      visible: { type: Boolean, default: false },
      position: { type: String, default: 'left' },
      onDismiss: { type: Function }
    },
    data: ()=> ({
      s,
      CASE_STYLES
    })
  }
</script>

<template>
  <transition
    @enter="enter"
    @leave="leave"
    :duration="300"
  >
    <div
      v-if="visible"
      :style="CASE_STYLES[position]"
      :class="s.drawerCase"
    >
      <div
        ref="drawer"
        :class="[s.drawerFixed, s[position]]"
      >
        <slot />
      </div>
      <div
        ref="overlay"
        :class="s.drawerOverlay"
        @click="()=> onDismiss && onDismiss()"
      />
    </div>
  </transition>
</template>
