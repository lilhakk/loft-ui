<script>
  import c from 'clsx';
  import s from '../../../common/Popover/guide.scss';
  import { Code, InlineCode as I } from '../../helpers';
  import Popover from './Popover.svelte';
  import Example from './Example.svelte'

  let example = false;
</script>

<h1>Popover</h1>

<Popover
  visible={example}
  content={Example}
>
  <div
    class={c([s.exampleIcon, { [s.exampleIconActive]: example }])}
    on:click={()=> example = !example}
  />
</Popover>
