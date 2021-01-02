import React, { useState } from 'react'
import Checkbox from './'
import { Code, InlineCode as I } from '../../helpers';

export default function AvatarGuide () {

  return (
    <>
      <h1>Checkbox</h1>
      <p>С помощью чекбоксов пользователь выбирает элементы из списка данных</p>
      <Code>{`
        import { Checkbox } from 'loft-ui'
      `}</Code>

      <h2>Пример</h2>
      <Code>{`
        const [selected, setSelected] = useState(false);

        return (
          <Checkbox
            selected={selected}
            onClick={()=> setSelected(!selected)}
          >Example</Checkbox>
        )
      `}</Code>
      <Example />
    </>
  )
}

function Example () {
  const [actives, setActives] = useState([false, true]);

  return (
    <>
      <Checkbox
        selected={actives[0]}
        onClick={()=> setActives([!actives[0], actives[1]])}
      >Default</Checkbox>
      <Checkbox
        selected={actives[1]}
        onClick={()=> setActives([actives[0], !actives[1]])}
      >Checked</Checkbox>
    </>
  )
}
