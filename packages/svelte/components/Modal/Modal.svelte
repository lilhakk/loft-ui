<script>
  import Button from '../Button';
  import { onMount } from 'svelte';
  import c from 'clsx';
  import s from '../../../common/Modal/index.scss';

  let MOUSE_POS = {};

  onMount(()=> {
    window.addEventListener('click', onClickWindow, true);
    function onClickWindow(event) {
      const clientRect = event.target.getBoundingClientRect();

      MOUSE_POS = {
        x: clientRect.left,
        y: clientRect.top
      };
    };
  })

  export let visible = true;
  export let title = '';
  export let onDone;
  export let onCancel;
  export let onDismiss;

  let step = 'exited';
  let _visible = visible;
  let musePosition = {};

  let refOverlay;
  let refModal;

  // set to document
  $: modalStyle = (()=> {
    if (visible) {
      if (step === 'exited' && visible) _visible = true;
      if (step === 'exited' && refModal) {
        musePosition = MOUSE_POS;

        setTimeout(()=> step = 'entered', 0);

        return `
          opacity: 0;
          transform: scale(0.3);
          left: ${MOUSE_POS.x}px;
          top: ${MOUSE_POS.y}px;
          transform-origin: 0px 0px;
        `;
      }
    }

    if (!visible) {
      if (step === 'entered' && refModal) {
        setTimeout(()=> step = 'exited', 300);

        return `
          opacity: 0;
          transform: scale(0.3);
          left: ${musePosition.x}px;
          top: ${musePosition.y}px;
          transform-origin: 0px 0px;
        `;
      }
      if (step === 'exited') {
        _visible = false;
        return '';
      }
    }
  })();

  $: overlayStyle = (()=> {

  })();
</script>

{#if _visible}
<div>
  <div
    bind:this={refOverlay}
    class={s.overlay}
    on:click={()=> onDismiss && onDismiss()}
  />

  <div
    bind:this={refModal}
    style={modalStyle}
    class={s.modal}
  >
    <div class={s.case}>
      <div :class={s.title}>{title}</div>
      <div class={s.content}>
        <slot />
      </div>
    </div>

    <div class={s.actions}>
      {#if onCancel}
        <Button
          size='s'
          variant='text'
          on:click={onCancel}
        >Отмена</Button>
      {/if}

      {#if onDone}
        <Button
          size='s'
          class={s.action}
          on:click={onDone}
        >Ок</Button>
      {/if}
    </div>
  </div>
</div>
{/if}
