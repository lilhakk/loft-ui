<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Modal from './Modal.svelte';
  import Button from '../Button';

  let visible = false;
</script>

<h1>Modal</h1>
<p>Скрытая часть появляющаяся поверх всего. Как правило по середине</p>
<Code v={`import { Modal } from 'loft-ui';`} lang='js' />

<h2>Простой пример</h2>
<Button
  on:click={()=> visible = true}
>Открыть</Button>
<Modal
  visible={visible}
  onDismiss={()=> visible = false}
  onCancel={()=> visible = false}
  onDone={()=> visible = false}
>Контент</Modal>
