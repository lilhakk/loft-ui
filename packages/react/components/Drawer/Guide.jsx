import React, { useState } from 'react'
import { Code, InlineCode as I } from '../../helpers';
import Drawer from './'
import Button from '../Button'

export default function DrawerGuide () {

  return (
    <>
      <h1>Drawer</h1>
      <Code v="import { Drawer } from 'loft-ui'" />

      <h2>Пример</h2>
      <Example />
    </>
  )

}

function Example () {
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
