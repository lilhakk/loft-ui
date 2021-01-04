<script>
  import c from 'clsx';
  import s from './index.scss';

  let propStyle = $$props.style || '';
  const propClass = $$props.class;
  export let propSrc = $$props.src || '';
  export let propSize = $$props.size || 'm';
  export let propShape = $$props.shape || 'circle';

  if (propSrc) propStyle += `background-image: url(${propSrc});`;
</script>

<div
  class={c(s.avatar, s[propSize], s[propShape], propClass)}
  style={propStyle}
/>
