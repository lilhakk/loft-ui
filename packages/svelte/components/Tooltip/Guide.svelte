<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Tooltip from './Tooltip.svelte';
  import Example from './Example.svelte';

  let visible = false;
</script>

<h1>Tooltip</h1>
<Tooltip
  content={Example}
>
  <div style="
    width: 36px;
    height: 36px;
    background-color: #f4f5f7;
    border-radius: 60px;
  " />
</Tooltip>
