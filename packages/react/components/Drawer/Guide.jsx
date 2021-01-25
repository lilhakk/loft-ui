import React, { useState } from 'react'
import { Code, InlineCode as I } from '../../helpers';
import Drawer from './'
import Button from '../Button'

export default function DrawerGuide () {

  return (
    <>
      <h1>Drawer</h1>
      <Code v="import { Drawer } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Example />
    </>
  )

}

function Example () {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <Drawer
        visible={visible}
        variant='static'
        style={{
          width: '240px',
          backgroundColor: '#333',
          height: '320px',
          padding: '8px'
        }}
        onDismiss={()=> setVisible(false)}
      >
        Content
      </Drawer>
      <Button onClick={()=> setVisible(true)}>Открыть</Button>
    </div>
  )
}
