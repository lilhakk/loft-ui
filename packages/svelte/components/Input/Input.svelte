<script>
  import c from 'clsx';
  import s from '../../../common/Input/index.scss';

  export let variant = 'line';
  export let label = '';
  export let type;
  export let value = '';
  export let style;
  // export let className;
  export let classLabel;
  export let classInput;
  export let onFocus;
  export let onBlur;
  export let onChange;

  let focus = false;
  let refInput;

  function _onFocus () {
    onFocus && onFocus();
    focus = true;
  }

  function _onBlur () {
    onBlur && onBlur();
    focus = false;
  }
</script>

{#if variant === 'line'}
<div
  bind:this={refInput}
  style={style}
  class={c(s.inputLine, {
    [s.inputValue]: !!value,
    [s.inputFocus]: focus
  })}
>
  <label class={c(s.inputLabel, classLabel)}>
    {label}
  </label>

  <input
    type={type}
    value={value}
    class={c(s.input, classInput)}
    on:focus={_onFocus}
    on:blur={_onBlur}
    on:change={e=> onChange && onChange(e.target.value)}
  />
</div>
{/if}

{#if variant === 'outline'}
  <div
    bind:this={refInput}
    class={c(s.inputOutline, {
      [s.inputValue]: !!value,
      [s.inputFocus]: focus
    })}
  >
    <fieldset class={s.inputOutlineFieldset}>
      <legend class={s.inputLegend}>{label}</legend>
    </fieldset>
    <label class={s.inputLabel}>{label}</label>
    <input
      type={type}
      value={value}
      class={s.input}
      on:focus={_onFocus}
      on:blur={_onBlur}
      on:change={e=> onChange && onChange(e.target.value)}
    />
  </div>
{/if}
