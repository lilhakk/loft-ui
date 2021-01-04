<script>
  import c from 'clsx';
  import s from './index.scss';

  const propStyle = $$props.style;
  export let propVariant = $$props.variant || 'circle';
  export let propSize = $$props.size || 'm';
  export let propColor = $$props.color || '#3155da';

  let childStyle = '';
  if (propColor) {
    if (propVariant === 'circle') childStyle = 'border-top-color:' + propColor;
    if (propVariant === 'dots') childStyle = 'background-color:' + propColor;
  }
</script>

{#if propVariant === 'circle'}
  <div class={c(s.circle, s[propSize])} style={propStyle}>
    <div class={s[propSize]} style={childStyle} />
    <div class={s[propSize]} style={childStyle} />
    <div class={s[propSize]} style={childStyle} />
    <div class={s[propSize]} style={childStyle} />
  </div>
{:else}
  <div class={c(s.dots, s[propSize])} style={propStyle}>
    <div class={c(s.dotsChild, s[propSize])} style={childStyle} />
    <div class={c(s.dotsChild, s[propSize])} style={childStyle} />
    <div class={c(s.dotsChild, s[propSize])} style={childStyle} />
  </div>
{/if}