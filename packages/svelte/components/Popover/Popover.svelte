<script>
  import s from '../../../common/Popover/index.scss';

  export let visible = false;
  export let content;
  export let contentProps;

  let step = 'exited';
  let _visible = false;
  let refContent;
  let refCaption;

  console.log(contentProps)

  $: popoverStyle = (()=> {
    if (visible) {
      if (step === 'exited' && visible) _visible = true;
      if (step === 'exited' && refCaption) {
        const captionRect = refCaption.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        setTimeout(()=> step = 'entered', 0);

        return `
          top: ${topPosition + captionRect.height - 5}px;
          left: ${captionRect.left}px;
          opacity: 0;
        `;
      }
      if (step === 'entered') {
        const captionRect = refCaption.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        return `
          top: ${topPosition + captionRect.height + 5}px;
          left: ${captionRect.left}px;
          opacity: 1;
        `;
      }
    }

    if (!visible) {
      if (step === 'entered' && refCaption) {
        const captionRect = refCaption.getBoundingClientRect();
        const topPosition = captionRect.top + document.documentElement.scrollTop;

        setTimeout(()=> step = 'exited', 300);

        return `
          top: ${topPosition + captionRect.height - 5}px;
          left: ${captionRect.left}px;
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
  <div bind:this={refCaption} >
    <slot />
  </div>
  {#if _visible}
    <div
      style={popoverStyle}
      class={s.content}
      bind:this={refContent}
    >
      <svelte:component this={content} {...contentProps} />
    </div>
  {/if}
</div>
