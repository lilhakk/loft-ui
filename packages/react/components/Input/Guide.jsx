import React from 'react'
import { Code, InlineCode as I } from '../../helpers';
import Input from './'

export default function InputGuide () {

  return (
    <>
      <h1>Input</h1>
      <p>...описание...</p>
      <Code v="import { Input } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [text, setText] = useState('');

        return (
          <Input
            label='Email'
            value={text}
            onChange={v=> setText(text)}
          />
        )
      `} />
      <Input
        style={{ width: 200 }}
        label='Email'
      />

      <h2>Пароль</h2>
      <Code v={`
        const [text, setText] = useState('');

        return (
          <Input
            label='Пароль'
            type='password'
            value={text}
            onChange={v=> setText(text)}
          />
        )
      `} />
      <Input
        style={{ width: 200 }}
        type='password'
        label='Пароль'
      />

      <h2>Задать маску</h2>
      <Code v={`
        const [text, setText] = useState('');

        return (
          <Input
            label='Телефон'
            mask='+ 7 (999) 999-99-99'
            value={text}
            onChange={v=> setText(text)}
          />
        )
      `} />
      <Input
        style={{ width: 200 }}
        mask='+ 7 (999) 999-99-99'
        label='Телефон'
      />
    </>
  )

}
