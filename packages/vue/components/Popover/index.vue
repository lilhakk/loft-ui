<script>
  import Guide from './Guide';
  import s from '../../../common/Popover/index.scss';

  export default {
    Guide,
    name: 'l-popover',
    props: {
      className: { type: String },
      visible: { type: Boolean, default: false },
      content: { type: Object }
    },
    methods: {
      enter(el) {
        document.documentElement.style.userSelect = 'none';
        const captionRect = this.$refs.caption.getBoundingClientRect();
        const contentRect = this.$refs.content.$el.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        this.$refs.content.$el.style = `
          width: ${contentRect.width}px;
          top: ${topPosition + captionRect.height - 5}px;
          left: ${captionRect.left}px;
          opacity: 0;
        `;

        document.body.append(el);
        setTimeout(()=> {
          this.$refs.content.$el.style = `
            width: ${contentRect.width}px;
            top: ${topPosition + captionRect.height + 5}px;
            left: ${captionRect.left}px;
            opacity: 1;
          `;
          document.documentElement.style.userSelect = '';
        }, 0);
      },
      leave() {
        const captionRect = this.$refs.caption.getBoundingClientRect();
        const contentRect = this.$refs.content.$el.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        this.$refs.content.$el.style = `
          width: ${contentRect.width}px;
          top: ${topPosition + captionRect.height - 5}px;
          left: ${captionRect.left}px;
          opacity: 0;
        `;
      }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div>
    <div ref="caption">
      <slot />
    </div>
    <transition
      @enter="enter"
      @leave="leave"
      :duration="300"
    >
      <component
        v-if="visible"
        ref="content"
        :is="content"
        :class="[s.content, className]"
      />
    </transition>
  </div>
</template>
