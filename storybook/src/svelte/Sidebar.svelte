<script>
  import { Link } from 'svelte-routing';
  import * as components from '@loft-ui/svelte';
  import c from 'clsx';
  import s from '../index.scss';

  function getProps({ href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: c(s.sidebarItem, s.sidebarItemActive) };
    }

    return { class: s.sidebarItem };
  }
</script>

<div class={s.sidebar}>
  {#each Object.keys(components) as key}
    <Link
      to={'/svelte/' + key.toLowerCase()}
      getProps={getProps}
    >{key}</Link>
  {/each}
</div>
