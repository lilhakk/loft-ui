<script>
  import { writable } from 'svelte/store';
  import s from '../../../common/Collapse/index.scss';
  import c from 'clsx';

  export let visible = false;

  let _visible = visible;
  let collapse;
  let step = writable('exited')
  let toHeight = writable(null)

  $: style = (()=> {
    // enter
    if (visible) {
      if ($step === 'exited' && visible) _visible = true;
      if ($step === 'exited' && collapse) {
        toHeight.set(collapse.getBoundingClientRect().height);
        setTimeout(()=> step.set('entering'), 0);
        return 'height: 0px;';
      }
      if ($step === 'entering') {
        setTimeout(()=> step.set('entered'), 300);
        return `height: ${$toHeight}px`;
      }
      if ($step === 'entered' && visible) return 'height: auto';
    }
    // ---

    // exit
    if (!visible) {
      if ($step === 'entered' && collapse) {
        setTimeout(()=> step.set('exiting'), 0);
        return `height: ${collapse.getBoundingClientRect().height}px`;
      }
      if ($step === 'exiting') {
        setTimeout(()=> step.set('exited'), 300);
        return 'height: 0px;';
      }
      if ($step === 'exited') {
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
    bind:this={collapse}
  >
    <slot />
  </div>
{/if}
