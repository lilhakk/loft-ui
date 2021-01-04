<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Checkbox from './Checkbox';

  let actives = [false, true];
</script>

<h1>Checkbox</h1>
<p>С помощью чекбоксов пользователь выбирает элементы из списка данных</p>
<Code v={`import { Checkbox } from 'loft-ui'`} lang='js' />

<h2>Пример</h2>
<Code v={`
  <script>
    let selected = false;
  </script>

  <Checkbox
    selected={selected}
    on:click={()=> selected = !selected}
  />
`} />
<div>
  <Checkbox
    selected={actives[0]}
    on:click={()=> actives[0] = !actives[0]}
  >Default</Checkbox>
  <Checkbox
    selected={actives[1]}
    on:click={()=> actives[1] = !actives[1]}
  >Checked</Checkbox>
</div>
