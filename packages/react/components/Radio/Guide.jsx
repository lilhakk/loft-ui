import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Radio from './';

export default function RadioGuide () {

  return (
    <>
      <h1>Radio</h1>
      <Code v="import { Radio } from 'loft-ui'" />

      <h2>Пример</h2>
      <Code v={`
        const [active, setActive] = useState(-1);

        return (
          <Radio value={active} onChange={v=> setActive(v)}>
            <Radio.Item value={1}>Select 1</Radio.Item>
            <Radio.Item value={2}>Select 2</Radio.Item>
          </Radio>
        )
      `} />
      <Example />
    </>
  )

}

function Example () {
  const [active, setActive] = useState(-1);

  return (
    <Radio value={active} onChange={v=> setActive(v)}>
      <Radio.Item value={1}>Select 1</Radio.Item>
      <Radio.Item value={2}>Select 2</Radio.Item>
    </Radio>
  )
}
