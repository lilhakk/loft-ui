<script>
  import Guide from './Guide';
  import Velocity from 'velocity-animate';
  import s from '../../../common/Collapse/index.scss';

  export default {
    name: 'l-collapse',
    Guide,
    props: {
      visible: { type: Boolean, default: false }
    },
    methods: {
      enter(el, done) {
        Velocity(el, { height: 0 }, { duration: 0 });

        const toHeight = el.getBoundingClientRect().height;
        const openStyle = { height: toHeight + 'px' };
        Velocity(el, openStyle, {
          duration: 300,
          complete: heightAuto
        });

        function heightAuto () {
          el.style = 'height: auto';
          done();
        }
      },
      leave(el, done) {
        Velocity(el, { height: 0 }, {
          duration: 300,
          complete: done
        });
      }
    },
    data: ()=> ({
      s,
      style: ''
    })
  }
</script>

<template>
  <transition
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <div
      v-if="visible"
      :class="s.case"
      :style="style"
      ref="ref"
    >
      <slot />
    </div>
  </transition>
</template>
