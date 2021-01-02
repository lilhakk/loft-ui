import { useState } from 'react'
import Drawer from './'
import Button from '../Button'

/*
# Drawer

```js
import { Drawer } from 'loft-ui'
```

## Пример
export const Example = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={()=> setVisible(true)}>Открыть</Button>
      <Drawer
        visible={visible}
        onDismiss={()=> setVisible(false)}
      >
        Content
      </Drawer>
    </>
  )
}

<Example />
*/
