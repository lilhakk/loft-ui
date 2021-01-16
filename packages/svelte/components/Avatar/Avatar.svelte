<script>
  import c from 'clsx';
  import s from '../../../common/Avatar/index.scss';

  export let style = '';
  export let src = '';
  export let size = 'm';
  export let shape = 'circle';

  if (src) style += `background-image: url(${src});`;
</script>

<div
  class={c(s.avatar, s[size], s[shape], $$props.class)}
  style={style}
/>
