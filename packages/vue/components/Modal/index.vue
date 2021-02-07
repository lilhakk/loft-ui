<script>
  import Guide from './Guide';
  import s from '../../../common/Modal/index.scss';

  let MOUSE_POS = {};
  window.addEventListener('click', onClickWindow, true);
  function onClickWindow(event) {
    const clientRect = event.target.getBoundingClientRect();

    MOUSE_POS = {
      x: clientRect.left,
      y: clientRect.top
    };
  };

  export default {
    Guide,
    name: 'l-modal',
    components: {
      'l-button': () => import('../Button')
    },
    props: {
      visible: { type: Boolean, default: true },
      title: { type: String, default: '' },
      onDone: { type: Function },
      onCancel: { type: Function },
      onDismiss: { type: Function }
    },
    methods: {
      enter(el) {
        document.documentElement.style.overflow = 'hidden';
        this.musePosition = MOUSE_POS;

        this.$refs.modal.style = `
          opacity: 0;
          transform: scale(0.3);
          left: ${MOUSE_POS.x}px;
          top: ${MOUSE_POS.y}px;
          transform-origin: 0px 0px;
        `;

        document.body.append(el);
        setTimeout(()=> this.$refs.modal.style = '', 0);
      },
      leave() {
        this.$refs.modal.style = `
          opacity: 0;
          transform: scale(0.3);
          left: ${this.musePosition.x}px;
          top: ${this.musePosition.y}px;
          transform-origin: 0px 0px;
        `;
      }
    },
    data: ()=> ({
      s,
      musePosition: {},
      overlayStyle: ''
    })
  }
</script>

<template>
  <transition
    @enter="enter"
    @leave="leave"
    :duration="300"
  >
    <div v-if="visible">
      <div
        ref="overlay"
        :class="s.overlay"
        @click="()=> onDismiss && onDismiss()"
      />

      <div ref="modal" :class="s.modal">
        <div :class="s.case">
          <div :class="s.title">{{title}}</div>
          <div :class="s.content">
            <slot />
          </div>
        </div>

        <div :class="s.actions">
          <l-button
            v-if="onCancel"
            size='s'
            variant='text'
            @click.native="onCancel"
          >Отмена</l-button>

          <l-button
            v-if="onDone"
            size='s'
            :class="s.action"
            @click.native="onDone"
          >Ок</l-button>
        </div>
      </div>
    </div>
  </transition>
</template>
