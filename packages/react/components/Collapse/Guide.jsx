import { useState } from 'react'
import Collapse from './'
import Button from '../Button'

/*
# Collapse
Компонент чтобы скрыть содержимое и отображать по событию

```js
import { Collapse } from 'loft-ui'
```

## Пример

export const Example = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <>
      <Collapse visible={visible}>
        <div style={{ padding: 8, boxSizing: 'border-box' }}>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <Collapse visible={visible2}>
            <div>222</div>
            <div>222</div>
            <div>222</div>
          </Collapse>
          <Button onClick={()=> setVisible2(!visible2)}>
            {visible2 ? 'Скрыть' : 'Показать'}
          </Button>
        </div>
      </Collapse>
      <Button onClick={()=> setVisible(!visible)}>
        {visible ? 'Скрыть' : 'Показать'}
      </Button>
    </>
  )
}

<Example />
*/
