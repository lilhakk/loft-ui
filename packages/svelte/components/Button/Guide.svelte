<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Button from './Button';

  let count = 0;
</script>

<h1>Button</h1>
<p>Кнопка - элемент при нажатии на которую происходит какое-то действие</p>
<Code v={`import { Button } from 'loft-ui';`} lang='js' />

<h2>Простой пример</h2>
<Code v={`
  <script>
    let count = 0;
  </script>

  <Button on:click={()=> count++}>
    Clicked {count} times!
  </Button>
`} />
<Button on:click={()=> count++}>
  Clicked {count} times!
</Button>

<h2>Варианты</h2>
<Code v={`
  <Button variant='default'>Default</Button>
  <Button variant='line'>Line</Button>
  <Button variant='text'>Text</Button>
`} />

<div style="display: flex;">
  <Button variant='default' style="margin-right: 8px;">Default</Button>
  <Button variant='line' style="margin-right: 8px;">Line</Button>
  <Button variant='text'>Text</Button>
</div>

<h2>Размеры</h2>

<h2>Загрузка</h2>
<p>Проп <I>loading</I> отвечает за статус загрузки. По умолчанию - <I>false</I></p>
<Code v={`
  <Button loading={true}>Loading</Button>
`} />
<Button loading={true}>Loading</Button>
