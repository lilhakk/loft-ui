import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Button from '../Button';
import Modal from './';

export default function ModalGuide () {

  return (
    <>
      <h1>Modal</h1>
      <p>Скрытая часть появляющаяся поверх всего. Как правило по середине</p>
      <Code v="import { Modal } from 'loft-ui'" />

      <h2>Простой пример</h2>
      <Example />
    </>
  )

}


function Example () {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>Открыть</Button>
      <Modal
        visible={visible}
        onDismiss={()=> setVisible(false)}
      >
        <Modal.Title>Title</Modal.Title>
        <Modal.Content>Content</Modal.Content>
        <Modal.Actions>
          <Button
            size='s'
            variant='text'
            onClick={()=> setVisible(false)}
          >Отмена</Button>
          <Button
            style={{ marginLeft: 8 }}
            size='s'
          >Да</Button>
        </Modal.Actions>
      </Modal>
    </div>
  )

}
