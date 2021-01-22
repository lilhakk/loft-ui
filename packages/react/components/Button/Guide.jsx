import React, { useState } from 'react'
import Button from './'
import { Code, InlineCode as I } from '../../helpers';

export default function AvatarGuide () {

  return (
    <>
      <h1>Button</h1>
      <p>Кнопка - элемент при нажатии на которую происходит какое-то действие</p>
      <Code v="import { Button } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [count, setCount] = useState(0);

        return (
          <Button onClick={() => setCount(count + 1)}>
            Clicked {count} times!
          </Button>
        );
      `} />
      <Example />

      <h2>Варианты</h2>
      <Code v={`
        <Button variant='default'>Default</Button>
        <Button variant='line'>Line</Button>
        <Button variant='text'>Text</Button>
      `} />
      <div style={{ display: 'flex' }}>
        <Button variant='default' style={{ marginRight: '8px' }}>Default</Button>
        <Button variant='line' style={{ marginRight: '8px' }}>Line</Button>
        <Button variant='text'>Text</Button>
      </div>

      <h2>Размеры</h2>
      <Code v={`
        <Button size='m'>Middle</Button>
        <Button size='s'>Small</Button>
      `} />
      <div style={{ display: 'flex' }}>
        <Button size='m' style={{ marginRight: '8px' }}>Middle</Button>
        <Button size='s'>Small</Button>
      </div>

      <h2>Загрузка</h2>
      <p>Проп <I>loading</I> отвечает за статус загрузки. По умолчанию - <I>false</I></p>
      <Code v={`<Button loading={true}>Loading</Button>`} />
      <Button loading={true}>Loading</Button>
    </>
  )

}

function Example () {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times!
    </Button>
  )
}
