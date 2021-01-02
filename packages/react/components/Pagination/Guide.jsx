import { useState } from 'react'
import Pagination from './'

/*
# Pagination
Компонент для переключения между частями контента

```js
import { Pagination } from 'loft-ui'
```

## Пример
```jsx
const [page, setPage] = useState('');

return (
  <Pagination
    count={10}
    page={page}
    onChange={v=> setPage(v)}
  />
)
```

export const Example = () => {
  const [page, setPage] = useState(3);
  return (
    <Pagination
      count={10}
      page={page}
      onChange={v=> setPage(v)}
    />
  )
}

<Example />
*/