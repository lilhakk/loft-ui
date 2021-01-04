import React, { useState } from 'react'
import { Code, InlineCode as I } from '../../helpers';
import Checkbox from './'

export default function CheckboxGuide () {

  return (
    <>
      <h1>Checkbox</h1>
      <p>С помощью чекбоксов пользователь выбирает элементы из списка данных</p>
      <Code v="import { Checkbox } from 'loft-ui'" />

      <h2>Пример</h2>
      <Code v={`
        const [selected, setSelected] = useState(false);

        return (
          <Checkbox
            selected={selected}
            onClick={()=> setSelected(!selected)}
          >Example</Checkbox>
        )
      `} />
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
