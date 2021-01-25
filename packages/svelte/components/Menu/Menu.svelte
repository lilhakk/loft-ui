<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import c from 'clsx';
  import s from '../../../common/Menu/index.scss';

  export let style = '';
  export let variant = 'horizontal';
  export let active = '';

  setContext('active', writable(active));
</script>

<div
  style={style}
  class={c(s.menu, s[variant], $$props.class)}
>
  <slot />
</div>
