<script>
  import Guide from './Guide';
  import s from '../../../common/Popover/index.scss';

  export default {
    Guide,
    name: 'l-popover',
    props: {
      className: { type: String },
      visible: { type: Boolean, default: false },
      content: { type: Object },
      contentProps: { type: Object },
      hasWidthCaption: { type: Boolean, default: false }
    },
    methods: {
      enter(el) {
        document.documentElement.style.userSelect = 'none';
        const captionRect = this.$slots.default[0].elm.getBoundingClientRect();
        const contentRect = this.$refs.content.$el.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        const width = this.hasWidthCaption ? captionRect.width : contentRect.width;
        if (!width) width = 'auto';

        this.$refs.content.$el.style = `
          width: ${width}px;
          top: ${topPosition + captionRect.height - 5}px;
          left: ${captionRect.left}px;
          opacity: 0;
        `;

        document.body.append(el);
        setTimeout(()=> {
          this.$refs.content.$el.style = `
            width: ${width}px;
            top: ${topPosition + captionRect.height + 5}px;
            left: ${captionRect.left}px;
            opacity: 1;
          `;
          document.documentElement.style.userSelect = '';
        }, 0);
      },
      leave() {
        const captionRect = this.$slots.default[0].elm.getBoundingClientRect();
        const contentRect = this.$refs.content.$el.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        const width = this.hasWidthCaption ? captionRect.width : contentRect.width;
        if (!width) width = 'auto';

        this.$refs.content.$el.style = `
          width: ${width}px;
          top: ${topPosition + captionRect.height - 5}px;
          left: ${captionRect.left}px;
          opacity: 0;
        `;
      }
    },
    data() {
      return { s }
    }
  }
</script>

<template>
  <div>
    <slot />
    <transition
      @enter="enter"
      @leave="leave"
      mode="out-in"
      :duration="300"
    >
      <component
        v-if="visible"
        ref="content"
        :is="content"
        v-bind="contentProps"
        :class="[s.content, className]"
      />
    </transition>
  </div>
</template>
