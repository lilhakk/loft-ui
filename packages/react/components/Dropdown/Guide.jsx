import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Dropdown from './';
import Input from '../Input';

export default function DropdownGuide () {
  const [example, setExample] = useState('');

  return (
    <>
      <h1>Dropdown</h1>
      <Code v="import { Dropdown } from 'loft-ui';" />

      <div style={{ width: '280px' }}>
        <Input
          label="Login"
          style={{ marginBottom: '16px' }}
        />

        <Input
          label="E-mail"
          variant="outline"
          style={{ marginBottom: '16px' }}
        />

        <Dropdown
          value={example}
          label="Language"
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
