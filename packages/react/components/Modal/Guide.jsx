import React, { useState } from 'react';
import { Code } from '../../helpers';
import Button from '../Button';
import Modal from './';

export default function ModalGuide() {
  return (
    <>
      <h1>Modal</h1>
      <p>Скрытая часть появляющаяся поверх всего. Как правило по середине</p>
      <Code v="import { Modal } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [visible, setVisible] = useState(false);

        return (
          <>
            <Button onClick={() => setVisible(true)}>Открыть</Button>
            <Modal
              visible={visible}
              title="Пример"
              onDone={()=> setVisible(false)}
              onCancel={()=> setVisible(false)}
              onDismiss={()=> setVisible(false)}
            >Контент</Modal>
          </>
        )
      `} />
      <Example />
    </>
  );
}

function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={()=> setVisible(true)}>Открыть</Button>
      <Modal
        visible={visible}
        title="Пример"
        onDone={()=> setVisible(false)}
        onCancel={()=> setVisible(false)}
        onDismiss={()=> setVisible(false)}
      >Контент</Modal>
    </div>
  );
}
