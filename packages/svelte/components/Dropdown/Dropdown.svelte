<script>
  import Popover from '../Popover';
  import Input from '../Input';
  import List from './List';
  import c from 'clsx';
  import s from '../../../common/Dropdown/index.scss';

  export let label = 'Select value';
  export let data = [];
  export let value = '';

  let visible = false;
  let activeLabel = '';

  $: contentProps = { value, data }
</script>

<Popover
  visible={visible}
  content={List}
  contentProps={contentProps}
  class={s.content}
  hasWidthCaption={true}
>
  <div
    class={c([s.dropdownCaption, {
      [s.dropdownActive]: visible,
      [s.dropdownSelect]: !!value
    }])}
  >
    <div
      class={s.dropdownHandler}
      on:click={()=> visible = !visible}
    />

    <Input
      label={label}
      value={activeLabel}
      variant='outline'
    />

    <div class={s.dropdownIcon}>
      <div class={s.line} />
      <div class={s.line} />
    </div>
  </div>
</Popover>
