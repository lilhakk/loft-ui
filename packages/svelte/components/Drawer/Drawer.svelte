<script>
  import {
    CASE_STYLES,
    POSITION_STYLES_HIDE,
    POSITION_NAMES
  } from '../../../common/Drawer/constants.json';
  import c from 'clsx';
  import s from '../../../common/Drawer/index.scss';

  export let position = 'left';
  export let visible;
  export let onDismiss;

  let _visible = false;
  let step = 'exited';

  let refDrawer;
  let refOverlay;

  $: drawerStyle = (()=> {
    if (visible) {
      if (step === 'exited' && visible) _visible = true;
      if (step === 'exited' && refDrawer) {
        const positionName = POSITION_NAMES[position];
        const positionStyle = POSITION_STYLES_HIDE[position];

        setTimeout(()=> step = 'entered', 0);

        return `transform: ${positionName}(${positionStyle});`;
      }
    }

    if (!visible) {
      if (step === 'entered' && refDrawer) {
        const positionName = POSITION_NAMES[position];
        const positionStyle = POSITION_STYLES_HIDE[position];

        setTimeout(()=> step = 'exited', 300);

        return `transform: ${positionName}(${positionStyle});`;
      }
      if (step === 'exited') {
        _visible = false;
        return '';
      }
    }
  })()
</script>

{#if _visible}
<div class={s.drawerCase}>
  <div
    bind:this={refDrawer}
    style={drawerStyle}
    class={c([s.drawerFixed, s[position]])}
  >
    <slot />
  </div>

  <div
    bind:this={refOverlay}
    class={s.drawerOverlay}
    on:click={()=> onDismiss && onDismiss()}
  />
</div>
{/if}
