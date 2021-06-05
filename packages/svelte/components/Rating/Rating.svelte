<script>
  import c from 'clsx';
  import s from '../../../common/Rating/index.scss';

  let activeIndex = -1;
  let hoverIndex = -1;

  const starts = new Array(5).fill(true)
</script>

<div
  class={s.loftRating}
  on:mouseleave={()=> hoverIndex = -1}
>
  {#each starts as _, index}
    <div
      class={c(s.loftRatingItem, {
        [s.loftRatingItemLastHover]: index === hoverIndex,
        [s.loftRatingItemHover]: index <= hoverIndex,
        [s.loftRatingItemActive]: index <= activeIndex
      })}
      on:mousemove={()=> hoverIndex = index}
      on:click={()=> activeIndex = index}
    />
  {/each}
</div>
