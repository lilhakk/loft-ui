<script>
  import s from '../../../common/Tooltip/index.scss';

  export let visible = false;
  export let content;

  let step = 'exited';
  let _visible = false;
  let refContent;
  let refCaption;

  function onMouseOver () {
    visible = true;
  }

  function onMouseLeave () {
    visible = false;
  }

  $: popoverStyle = (()=> {
    if (visible) {
      if (step === 'exited' && visible) _visible = true;
      if (step === 'exited' && refCaption && refContent) {
        const captionRect = refCaption.getBoundingClientRect();
        const contentRect = refContent.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        setTimeout(()=> step = 'entered', 0);

        return `
          top: ${topPosition - contentRect.height - 5}px;
          left: ${captionRect.left + (captionRect.width / 2) - (contentRect.width / 2)}px;
          opacity: 0;
        `;
      }
      if (step === 'entered') {
        const captionRect = refCaption.getBoundingClientRect();
        const contentRect = refContent.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        return `
          top: ${topPosition - contentRect.height - 5}px;
          left: ${captionRect.left + (captionRect.width / 2) - (contentRect.width / 2)}px;
          opacity: 1;
        `;
      }
    }

    if (!visible) {
      if (step === 'entered' && refCaption) {
        const captionRect = refCaption.getBoundingClientRect();
        const contentRect = refContent.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        setTimeout(()=> step = 'exited', 300);

        return `
          top: ${topPosition - contentRect.height - 5}px;
          left: ${captionRect.left + (captionRect.width / 2) - (contentRect.width / 2)}px;
          opacity: 0;
        `;
      }
      if (step === 'exited') {
        _visible = false;
        return '';
      }
    }
  })()
</script>

<div>
  <div
    on:mouseover={onMouseOver}
    on:mouseleave={onMouseLeave}
    bind:this={refCaption}
  >
    <slot />
  </div>
  {#if _visible}
    <div
      style={popoverStyle}
      class={s.content}
      bind:this={refContent}
    >
      <svelte:component this={content} />
    </div>
  {/if}
</div>
