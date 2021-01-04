<script>
  import c from 'clsx';
  import s from './index.scss';

  export let style = '';
  export let variant = 'circle';
  export let size = 'm';
  export let color = '#3155da';

  let childStyle = '';
  if (color) {
    if (variant === 'circle') childStyle = 'border-top-color:' + color;
    if (variant === 'dots') childStyle = 'background-color:' + color;
  }
</script>

{#if variant === 'circle'}
  <div class={c(s.circle, s[size])} style={style}>
    <div class={s[size]} style={childStyle} />
    <div class={s[size]} style={childStyle} />
    <div class={s[size]} style={childStyle} />
    <div class={s[size]} style={childStyle} />
  </div>
{:else}
  <div class={c(s.dots, s[size])} style={style}>
    <div class={c(s.dotsChild, s[size])} style={childStyle} />
    <div class={c(s.dotsChild, s[size])} style={childStyle} />
    <div class={c(s.dotsChild, s[size])} style={childStyle} />
  </div>
{/if}