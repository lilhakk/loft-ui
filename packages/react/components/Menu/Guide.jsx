import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Menu from './';

export default function MenuGuide () {
  const [value, setValue] = useState('');

  return (
    <>
      <h1>Menu</h1>
      <Code v="import { Menu } from 'loft-ui'" />

      <h2>Простой пример</h2>
      <Menu
        active={value}
        onChange={v=> setValue(v)}
      >
        <Menu.Item value='home'>Главная</Menu.Item>
        <Menu.Item value='about'>О нас</Menu.Item>
        <Menu.Item value='news'>Новости</Menu.Item>
        <Menu.Item value='contacts'>Контакты</Menu.Item>
      </Menu>

    </>
  );

}
