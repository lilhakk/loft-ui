import React, { useState } from 'react';
import { Code } from '../../helpers';
import Dropdown from './';

export default function DropdownGuide() {
  const [example, setExample] = useState('');

  return (
    <>
      <h1>Dropdown</h1>
      <p>Выпадающее меню - это навигация, для выбора значения</p>
      <Code v="import { Dropdown } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [value, setValue] = useState('');

        return (
          <Dropdown
            value={value}
            label='Language'
            data={[
              { value: 'java', label: 'Java' },
              { value: 'js', label: 'JavaScript' },
              { value: 'cpp', label: 'C++' }
            ]}
            onChange={v=> setValue(v)}
          />
        )
      `} />
      <div style={{ width: '280px' }}>
        <Dropdown
          value={example}
          label='Language'
          data={[
            { value: 'java', label: 'Java' },
            { value: 'js', label: 'JavaScript' },
            { value: 'cpp', label: 'C++' }
          ]}
          onChange={v=> setExample(v)}
        />
      </div>
    </>
  );
}
