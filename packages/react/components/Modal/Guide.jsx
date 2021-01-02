import { useState } from 'react'
import Modal from './'
import Button from '../Button'

/*
# Modal
Скрытая часть появляющаяся поверх всего. Как правило по середине

```js
import { Modal } from 'loft-ui'
```

## Простой пример
export const Example = () => {
  const [visible, setVisible] = useState(false)
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

<Example />
*/
