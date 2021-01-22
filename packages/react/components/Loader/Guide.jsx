import React from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Loader from './';

export default function LoaderGuide () {

  return (
    <>
      <h1>Loader</h1>
      <p>Индикатор загрузки, информирует пользователя что в данный момент что-то подгружается или обрабатывается</p>
      <Code v="import { Loader } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v="<Loader />" />
      <Loader />

      <h2>Варианты дизайна</h2>
      <Code v={`
        <Loader variant="circle" />
        <Loader variant="dots" />
      `} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Loader variant="circle" />
        <Loader variant="dots" style={{ marginLeft: 8 }} />
      </div>

      <h2>Размеры</h2>
      <Code v={`
        <Loader variant="circle" size='xl' />
        <Loader variant="circle" size='l' />
        <Loader variant="circle" size='m' />
        <Loader variant="circle" size='s' />

        <Loader variant="dots" size='xl' />
        <Loader variant="dots" size='l' />
        <Loader variant="dots" size='m' />
        <Loader variant="dots" size='s' />
      `} />
      <div style={{ display: 'flex' }}>
        <Loader variant="circle" size='xl' />
        <Loader variant="circle" size='l' />
        <Loader variant="circle" size='m' />
        <Loader variant="circle" size='s' />
      </div>
      <div style={{ display: 'flex', marginTop: '36px' }}>
        <Loader variant="dots" size='xl' style={{ marginRight: '24px' }} />
        <Loader variant="dots" size='l' style={{ marginRight: '24px' }} />
        <Loader variant="dots" size='m' style={{ marginRight: '24px' }} />
        <Loader variant="dots" size='s' />
      </div>

      <h2>Цвет</h2>
      <p>Можно пременить любой цвет, передавая его в проп <I>color</I></p>
      <Code v={`
        <Loader variant="circle" color='green' />
        <Loader variant="circle" color='#a02338' />
        <Loader variant="dots" color='#888888' />
      `} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Loader variant="circle" color='green' />
        <Loader variant="circle" color='#a02338' />
        <Loader variant="dots" color='#888888' style={{ marginLeft: 8 }} />
      </div>
    </>
  )

}
