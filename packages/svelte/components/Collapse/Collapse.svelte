<script>
  import s from '../../../common/Collapse/index.scss';
  import c from 'clsx';

  export let visible = false;

  let _visible = visible;
  let step = 'exited';
  let toHeight = null;

  let refCollapse;

  $: style = (()=> {
    // enter
    if (visible) {
      if (step === 'exited' && visible) _visible = true;
      if (step === 'exited' && refCollapse) {
        toHeight = refCollapse.getBoundingClientRect().height;
        setTimeout(()=> step = 'entering', 0);
        return 'height: 0px;';
      }
      if (step === 'entering') {
        setTimeout(()=> step = 'entered', 300);
        return `height: ${toHeight}px`;
      }
      if (step === 'entered' && visible) return 'height: auto';
    }
    // ---

    // exit
    if (!visible) {
      if (step === 'entered' && refCollapse) {
        setTimeout(()=> step = 'exiting', 0);
        return `height: ${refCollapse.getBoundingClientRect().height}px`;
      }
      if (step === 'exiting') {
        setTimeout(()=> step = 'exited', 300);
        return 'height: 0px;';
      }
      if (step === 'exited') {
        _visible = false;
        return '';
      }
    }
    // ---
  })();
</script>

{#if _visible}
  <div
    style={style}
    class={c(s.case, s.animate)}
    bind:this={refCollapse}
  >
    <slot />
  </div>
{/if}
