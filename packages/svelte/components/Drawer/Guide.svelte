<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Drawer from './Drawer.svelte';
  import Button from '../Button';

  let visible = false;
</script>

<h1>Drawer</h1>
<Drawer
  visible={visible}
  onDismiss={()=> visible = false}
>Контент</Drawer>
<Button on:click={()=> visible = true}>Открыть</Button>
