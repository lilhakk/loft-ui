import React from 'react';
import Avatar from './';
import { Code, InlineCode as I } from '../../helpers';

export default function AvatarGuide () {

  return (
    <div>
      <h1>Avatar</h1>
      <p>Компонент для отображения изображения профиля пользователя</p>
      <Code v={`import { Avatar } from 'loft-ui'`} />

      <h2>Простой пример</h2>
      <p>Если никаких параметров не установлено, отображается fallback картинка</p>
      <Code v={`<Avatar />`} />
      <Avatar style={{ backgroundColor: '#eee' }} />

      <h2>Ссылка на изображение</h2>
      <p>Чтобы применить изображение, нужно передать ссылку в проп <I>src</I></p>
      <Code v={`<Avatar src='...' />`} />
      <Avatar src='https://pbs.twimg.com/profile_images/954130745341173760/4nqA97Tl_400x400.jpg' />

      <h2>Размеры</h2>
      <p>Есть 4 варианта размеров: <I>xl</I>, <I>l</I>, <I>m</I>, <I>s</I> (по умолчанию - <I>m</I>)</p>
      <Code v={`
        <Avatar size='xl' />
        <Avatar size='l' />
        <Avatar size='m' />
        <Avatar size='s' />
      `} />
      <div style={{ display: 'flex' }}>
        <Avatar size='xl' style={{ backgroundColor: '#eee', marginRight: 8 }} />
        <Avatar size='l' style={{ backgroundColor: '#eee', marginRight: 8 }} />
        <Avatar size='m' style={{ backgroundColor: '#eee', marginRight: 8 }} />
        <Avatar size='s' style={{ backgroundColor: '#eee', marginRight: 8 }} />
      </div>

      <h2>Форма</h2>
      <p>По умолчанию - <I>circle</I></p>
      <Code v={`
        <Avatar shape='circle' />
        <Avatar shape='square' />
      `} />
      <div style={{ display: 'flex' }}>
        <Avatar shape='circle' style={{ backgroundColor: '#eee', marginRight: 8 }} />
        <Avatar shape='square' style={{ backgroundColor: '#eee', marginRight: 8 }} />
      </div>
    </div>
  )

};
