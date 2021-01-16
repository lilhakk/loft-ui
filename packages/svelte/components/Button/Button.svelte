<script>
  import { createEventDispatcher } from 'svelte';
  import Loader from '../Loader/Loader';
  import c from 'clsx';
  import s from '../../../common/Button/index.scss';

  export let style = '';
  export let size = 'm';
  export let variant = 'default';
  export let loading = false;
  // export let to = '';

  const dispatch = createEventDispatcher();
  const classes = c(s.button, s[variant], s[size], $$props.class);
</script>

{#if loading}
  <div
    style={style}
    class={c(s.button, s.load, s.m)}
  >
    <Loader variant='dots' />
  </div>
{:else}
  <div
    style={style}
    class={classes}
    on:click={()=> dispatch('click')}
  >
    <slot></slot>
  </div>
{/if}
