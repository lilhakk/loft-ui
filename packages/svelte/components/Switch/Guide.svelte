<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Switch from './Switch';

  let selected = false;
</script>

<h1>Switch</h1>
<Code v={`import { Switch } from 'loft-ui';`} lang="js" />

<h2>Простой пример</h2>
<Switch
  selected={selected}
  on:click={()=> selected = !selected}
/>
