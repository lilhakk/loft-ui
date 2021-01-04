<script>
  import { createEventDispatcher } from 'svelte';
  import Loader from '../Loader/Loader';
  import c from 'clsx';
  import s from './index.scss';

  const propStyle = $$props.style;
  const propClass = $$props.class;
  // export let propTo = '';
  export let propSize = $$props.size || 'm';
  export let propVariant = $$props.variant || 'default';
  export let propLoading = $$props.loading || false;

  const dispatch = createEventDispatcher();
  const classes = c(s.button, s[propVariant], s[propSize], propClass);
</script>

{#if propLoading}
  <div
    style={propStyle}
    class={c(s.button, s.load, s.m, propClass)}
  >
    <Loader variant='dots' />
  </div>
{:else}
  <div
    style={propStyle}
    class={classes}
    on:click={()=> dispatch('click')}
  >
    <slot></slot>
  </div>
{/if}
