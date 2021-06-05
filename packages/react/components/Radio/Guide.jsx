import React, { useState } from 'react';
import { Code } from '../../helpers';
import Radio from './';

export default function RadioGuide() {
  const [active, setActive] = useState(-1);

  return (
    <>
      <h1>Radio</h1>
      <p>Позволяет выбрать только одно значение из группы</p>
      <Code v="import { Radio } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [active, setActive] = useState(-1);

        return (
          <Radio active={active} onChange={v=> setActive(v)}>
            <Radio.Item value={1}>Select 1</Radio.Item>
            <Radio.Item value={2}>Select 2</Radio.Item>
          </Radio>
        )
      `} />
      <Radio active={active} onChange={v=> setActive(v)}>
        <Radio.Item value={1}>Select 1</Radio.Item>
        <Radio.Item value={2}>Select 2</Radio.Item>
      </Radio>
    </>
  );

}
