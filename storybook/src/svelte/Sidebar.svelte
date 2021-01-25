<script>
  import * as components from '@loft-ui/svelte';
  import { Menu } from '@loft-ui/svelte';
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

<Menu
  class={s.sidebar}
  active={window.location.pathname}
  variant='vertical'
>
  {#each Object.keys(components) as key}
    <Menu.Item to={'/svelte/' + key.toLowerCase()}>
      {key}
    </Menu.Item>
  {/each}
</Menu>
