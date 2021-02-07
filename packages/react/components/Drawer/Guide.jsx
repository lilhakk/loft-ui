import React, { useState } from 'react';
import { Code } from '../../helpers';
import Drawer from './';
import Button from '../Button';

export default function DrawerGuide() {
  const [example, setExample] = useState(false);

  return (
    <>
      <h1>Drawer</h1>
      <Code v="import { Drawer } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [visible, setVisible] = useState(false);

        return (
          <>
            <Drawer
              visible={visible}
              onDismiss={()=> setVisible(false)}
            >Content</Drawer>
            <Button onClick={()=> setVisible(true)}>Открыть</Button>
          </>
        );
      `} />
      <div>
        <Drawer
          visible={example}
          onDismiss={()=> setExample(false)}
        >Контент</Drawer>
        <Button onClick={()=> setExample(true)}>Открыть</Button>
      </div>
    </>
  );

}
