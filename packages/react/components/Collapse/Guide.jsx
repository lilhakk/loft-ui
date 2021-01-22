import React, { useState } from 'react'
import { Code, InlineCode as I } from '../../helpers';
import Button from '../Button'
import Collapse from './'

export default function CollapseGuide () {
  return (
    <>
      <h1>Collapse</h1>
      <p>Компонент чтобы скрыть содержимое и отображать по событию</p>
      <Code v="import { Collapse } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Example />
    </>
  );
}

function Example () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <>
      <Collapse visible={visible}>
        <div style={{ padding: 8, boxSizing: 'border-box' }}>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <Collapse visible={visible2}>
            <div>222</div>
            <div>222</div>
            <div>222</div>
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
