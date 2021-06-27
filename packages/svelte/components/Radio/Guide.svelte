<script>
  import { Code } from '../../helpers';
  import Radio from './Radio.svelte'

  let active = '';
</script>

<h1>Radio</h1>
<p>Позволяет выбрать только одно значение из группы</p>
<Code v={`import { l-radio } from 'loft-ui';`} />

<Radio active={active}>
  <Radio.Item value="1">Select 1</Radio.Item>
  <Radio.Item value="2">Select 2</Radio.Item>
</Radio>
