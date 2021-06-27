<script>
  import { getContext } from 'svelte';
  import c from 'clsx';
  import s from '../../../common/Radio/index.scss';

  export let value = '';

  let active = '';
  const activeStore = getContext('active');
  activeStore.subscribe(v => active = v);
</script>

<div
  class={c([s.radio, { [s.active]: active === value }])}
  on:click={()=> activeStore.set(value)}
>
  <div class={s.iconCase}>
    <div class={s.icon} />
  </div>
  <div class={s.label}>
    <slot />
  </div>
</div>
