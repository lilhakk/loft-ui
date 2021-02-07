<script>
  import { createEventDispatcher } from 'svelte';
  import c from 'clsx';
  import s from '../../../common/Switch/index.scss';

  export let selected = false;

  const dispatch = createEventDispatcher();
</script>

<div
  class={c(s.switch, { [s.active]: selected })}
  on:click={()=> dispatch('click')}
>
  <div class={c(s.circle)} />
</div>

