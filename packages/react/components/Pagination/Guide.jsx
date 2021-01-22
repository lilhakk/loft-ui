import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Pagination from './';

export default function PaginationGuide () {

  return (
    <>
      <h1>Pagination</h1>
      <p>Компонент для переключения между частями контента</p>
      <Code v="import { Pagination } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [page, setPage] = useState('');

        return (
          <Pagination
            count={10}
            page={page}
            onChange={v=> setPage(v)}
          />
        )
      `} />
      <Example />
    </>
  )

}

function Example () {
  const [page, setPage] = useState(3);

  return (
    <Pagination
      count={10}
      page={page}
      onChange={v=> setPage(v)}
    />
  )
}
