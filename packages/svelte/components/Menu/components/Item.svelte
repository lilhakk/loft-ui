<script>
  import { getContext } from 'svelte';
  import { Link } from 'svelte-routing';
  import c from 'clsx';
  import s from '../../../../common/Menu/index.scss';

  export let value = '';
  export let to = '';

  let active = '';
  const activeStore = getContext('active');
  activeStore.subscribe(value => active = value);
</script>

{#if !to}
  <div
    class={c(s.menuItem, {
      [s.menuItemActive]: active === value
    })}
    on:click={()=> activeStore.set(value)}
  >
    <slot />
  </div>
{/if}

{#if to}
  <Link
    to={to}
    class={c(s.menuItem, {
      [s.menuItemActive]: active === to
    })}
    on:click={()=> activeStore.set(to)}
  >
    <slot />
  </Link>
{/if}
