<script>
  import Guide from './Guide';
  import s from '../../../common/Rating/index.scss';

  export default {
    Guide,
    name: 'l-rating',
    props: {
      value: { type: Number, default: 50 },
      total: { type: Number, default: 100 },
      count: { type: Number, default: 5 }
    },
    data() {
      return {
        s,
        hoverIndex: -1,
        activeIndex: -1
      }
    }
  }
</script>

<template>
  <div
    :class="s.loftRating"
    @mouseleave="hoverIndex = -1"
  >
    <div
      v-for="_, index in new Array(5).fill(true)"
      :class="[s.loftRatingItem, {
        [s.loftRatingItemHover]: index <= hoverIndex,
        [s.loftRatingItemActive]: index <= activeIndex
      }]"
      @mousemove="hoverIndex = index"
      v-on:click="activeIndex = index"
    />
  </div>
</template>
