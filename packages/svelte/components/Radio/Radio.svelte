<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import s from '../../../common/Radio/index.scss';

  export let active = '';

  setContext('active', writable(active));
</script>

<div class={s.radioCase}>
  <slot />
</div>
