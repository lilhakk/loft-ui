import { useState } from 'react'
import Input from './'

/*
# Input
...описание...

```js
import { Input } from 'loft-ui'
```

## Простой пример
```jsx
const [text, setText] = useState('');

return (
  <Input
    label='Email'
    value={text}
    onChange={v=> setText(text)}
  />
)
```

<Input
  style={{ width: 200 }}
  label='Email'
/>

## Пароль
```jsx
const [text, setText] = useState('');

return (
  <Input
    label='Пароль'
    type='password'
    value={text}
    onChange={v=> setText(text)}
  />
)
```

<Input
  style={{ width: 200 }}
  type='password'
  label='Пароль'
/>

## Задать маску
```jsx
const [text, setText] = useState('');

return (
  <Input
    label='Телефон'
    mask='+ 7 (999) 999-99-99'
    value={text}
    onChange={v=> setText(text)}
  />
)
```

<Input
  style={{ width: 200 }}
  mask='+ 7 (999) 999-99-99'
  label='Телефон'
/>
*/