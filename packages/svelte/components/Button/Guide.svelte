<script>
  import { Code, InlineCode as I } from '../../helpers';

</script>

<h1>Button</h1>
<p>Кнопка - элемент при нажатии на которую происходит какое-то действие</p>
<Code v={`import { Button } from 'loft-ui'`} />

<h2>Пример</h2>
<Code v="Button" />

<h2>Варианты</h2>
<Code v={`
  <Button variant='default'>Default</Button>
  <Button variant='line'>Line</Button>
  <Button variant='text'>Text</Button>
`} lang="html" />

<div style="display: flex;">
</div>
