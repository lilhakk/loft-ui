import React, { useState } from 'react';
import { Code } from '../../helpers';
import AutoComplete from './';

export default function AutoCompleteGuide() {
  const [example, setExample] = useState({});

  return (
    <>
      <h1>AutoComplete</h1>
      <p>Всплывающие окно со списком, для выбора значения, со вспомогательным полем для ввода текста</p>
      <Code v="import { AutoComplete } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [active, setActive] = useState({});

        return (
          <AutoComplete
            data={[
              { label: 'Jack London', value: 'jl' },
              { label: 'Liam Ellis', value: 'le' },
              { label: 'Jude Davis', value: 'jd' }
              /* ... */
            ]}
            value={active}
            onChange={v=> setActive(v)}
          />
        )
      `} />
      <AutoComplete
        data={[
          { label: 'Jack London', value: 'jl' },
          { label: 'Liam Ellis', value: 'le' },
          { label: 'Jude Davis', value: 'jd' },
          { label: 'Noah Fraser', value: 'nf' },
          { label: 'Dylan John', value: 'dj' },
          { label: 'Frederick Palmer', value: 'fp' },
          { label: 'Blaze Diaz', value: 'bd' },
          { label: 'Declan Cervantes', value: 'dc' },
          { label: 'Maximilian Shepard', value: 'ms' }
        ]}
        value={example}
        onChange={v=> setExample(v)}
      />
    </>
  );
}
