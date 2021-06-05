import React, { useState } from 'react';
import { Code } from '../../helpers';
import Button from '../Button';
import Collapse from './';

export default function CollapseGuide() {
  return (
    <>
      <h1>Collapse</h1>
      <p>Компонент чтобы скрыть содержимое и отображать по событию</p>
      <Code v="import { Collapse } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [visible, setVisible] = useState(false);
        const [visible2, setVisible2] = useState(false);

        return (
          <Collapse visible={visible}>
            <h3>Заголовок 1</h3>
            <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>

            <Collapse visible={visible2}>
              <h3>Заголовок 2</h3>
              <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>
            </Collapse>
            <Button onClick={()=> setVisible2(!visible2)}>
              {visible2 ? 'Скрыть' : 'Показать'}
            </Button>
          </Collapse>

          <Button onClick={()=> setVisible(!visible)}>
            {visible ? 'Скрыть' : 'Показать'}
          </Button>
        )
      `} />
      <Example />
    </>
  );
}

function Example() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <>
      <Collapse visible={visible}>
        <div style={{ padding: 8, boxSizing: 'border-box' }}>
          <h3>Заголовок 1</h3>
          <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>
          <Collapse visible={visible2}>
            <h3 style={{ marginTop: '16px' }}>Заголовок 2</h3>
            <div>Таким образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</div>
          </Collapse>
          <Button onClick={()=> setVisible2(!visible2)}>
            {visible2 ? 'Скрыть' : 'Показать'}
          </Button>
        </div>
      </Collapse>

      <Button onClick={()=> setVisible(!visible)}>
        {visible ? 'Скрыть' : 'Показать'}
      </Button>
    </>
  );
}
