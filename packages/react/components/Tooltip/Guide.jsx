import React from 'react';
import { Code } from '../../helpers';
import Tooltip from './';

export default function TooltipGuide() {

  const exampleContent = (
    <div>Контент</div>
  );

  return (
    <>
      <h1>Tooltip</h1>
      <Code v="import { Popover } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Tooltip content={exampleContent}>
        <div style={{
          width: '36px',
          height: '36px',
          backgroundColor: '#f4f5f7',
          borderRadius: 60
        }} />
      </Tooltip>
    </>
  );
}
