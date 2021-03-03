<script>
  import Guide from './Guide';
  import s from '../../../common/Tooltip/index.scss';

  export default {
    Guide,
    name: 'l-tooltip',
    props: {
      className: { type: String },
      content: { type: Object }
    },
    mounted() {
      const caption = this.$slots.default[0].elm;
      caption.addEventListener('mouseover', this.onMouseOver);
    },
    methods: {
      onMouseOver() {
        const caption = this.$slots.default[0].elm;
        caption.addEventListener('mouseleave', this.onMouseLeave);
        this.visible = true;
      },
      onMouseLeave() {
        const caption = this.$slots.default[0].elm;
        this.visible = false;
        caption.removeEventListener('mouseleave', this.onMouseLeave);
      },
      enter(el) {
        const captionRect = this.$slots.default[0].elm.getBoundingClientRect();
        const contentRect = this.$refs.content.$el.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        this.$refs.content.$el.style = `
          top: ${topPosition - contentRect.height - 5}px;
          left: ${captionRect.left + (captionRect.width / 2) - (contentRect.width / 2)}px;
          opacity: 0;
        `;

        document.body.append(el);
        setTimeout(()=> {
          this.$refs.content.$el.style = `
            top: ${topPosition - contentRect.height - 5}px;
            left: ${captionRect.left + (captionRect.width / 2) - (contentRect.width / 2)}px;
            opacity: 1;
          `;
        }, 0);
      },
      leave() {
        const captionRect = this.$slots.default[0].elm.getBoundingClientRect();
        const contentRect = this.$refs.content.$el.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        this.$refs.content.$el.style = `
          top: ${topPosition - contentRect.height - 5}px;
          left: ${captionRect.left + (captionRect.width / 2) - (contentRect.width / 2)}px;
          opacity: 0;
        `;
      }
    },
    components: {
      'l-popover': ()=> import('../Popover')
    },
    data: ()=> ({
      s,
      visible: false
    })
  }
</script>

<template>
  <div>
    <slot />
    <transition
      @enter="enter"
      @leave="leave"
      :duration="300"
    >
      <component
        v-if="visible"
        ref="content"
        :is="content"
        :class="s.content"
      />
    </transition>
  </div>
</template>
