<script>
  import Collapse from './Collapse';
  import Button from '../Button';

  let visible = false;
  let visible2 = false;
</script>

<h1>Collapse</h1>
<p>Компонент чтобы скрыть содержимое и отображать по событию</p>

<Collapse visible={visible}>
  <div style="padding: 8px; box-sizing: border-box;">
    <h3>Заголовок 1</h3>
    <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>

    <Collapse visible={visible2}>
      <h3 style="margin-top: 16px;">Заголовок 2</h3>
      <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>
    </Collapse>
    <Button on:click={()=> visible2 = !visible2}>
      {visible2 ? 'Скрыть' : 'Показать'}
    </Button>
  </div>
</Collapse>
<Button on:click={()=> visible = !visible}>
  {visible ? 'Скрыть' : 'Показать'}
</Button>
