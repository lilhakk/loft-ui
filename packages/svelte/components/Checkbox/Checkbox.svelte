<script>
  import { createEventDispatcher } from 'svelte';
  import c from 'clsx';
  import s from '../../../common/Checkbox/index.scss';

  export let selected = false;

  const dispatch = createEventDispatcher();
</script>

<div>
  <div
    on:click={()=> dispatch('click')}
    class={c([s.checkbox, { [s.active]: selected }])}
  >
    <div class={s.iconCase}>
      <div class={s.icon} />
    </div>
    <div class={s.label}>
      <slot />
    </div>
  </div>
</div>
