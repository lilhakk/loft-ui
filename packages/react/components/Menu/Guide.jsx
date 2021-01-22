import React, { useState } from 'react';
import { Code, InlineCode as I } from '../../helpers';
import Menu from './';

export default function MenuGuide () {
  const [horizontal, setHorizontal] = useState('');
  const [vertical, setVertical] = useState('');
  const [withList, setWithList] = useState('');

  return (
    <>
      <h1>Menu</h1>
      <Code v="import { Menu } from 'loft-ui';" />

      <h2>Простой пример</h2>
      <Code v={`
        const [active, setActive] = useState('');

        return (
          <Menu
            active={active}
            onChange={v=> setActive(v)}
          >
            <Menu.Item value='home'>Главная</Menu.Item>
            <Menu.Item value='about'>О нас</Menu.Item>
            <Menu.Item value='news'>Новости</Menu.Item>
            <Menu.Item value='contacts'>Контакты</Menu.Item>
          </Menu>
        );
      `} />
      <Menu
        active={horizontal}
        onChange={v=> setHorizontal(v)}
      >
        <Menu.Item value='home'>Главная</Menu.Item>
        <Menu.Item value='about'>О нас</Menu.Item>
        <Menu.Item value='news'>Новости</Menu.Item>
        <Menu.Item value='contacts'>Контакты</Menu.Item>
      </Menu>

      <h2>Вертикальное меню</h2>
      <Code v={`
        const [active, setActive] = useState('');

        return (
          <Menu
            variant='vertical'
            active={active}
            onChange={v=> setActive(v)}
          >
            <Menu.Item value='home'>Главная</Menu.Item>
            <Menu.Item value='about'>О нас</Menu.Item>
            <Menu.Item value='news'>Новости</Menu.Item>
            <Menu.Item value='contacts'>Контакты</Menu.Item>
          </Menu>
        );
      `} />
      <Menu
        variant='vertical'
        style={{ width: '200px' }}
        active={vertical}
        onChange={v=> setVertical(v)}
      >
        <Menu.Item value='home'>Главная</Menu.Item>
        <Menu.Item value='about'>О нас</Menu.Item>
        <Menu.Item value='news'>Новости</Menu.Item>
        <Menu.Item value='contacts'>Контакты</Menu.Item>
      </Menu>

      <h2>Меню с выпадающим списком</h2>
      <Code v={`
        const [active, setActive] = useState('');

        return (
          <Menu
            variant='vertical'
            active={active}
            onChange={v=> setActive(v)}
          >
            <Menu.Item value='home'>Главная</Menu.Item>
            <Menu.Item value='about'>О нас</Menu.Item>
            <Menu.List title='Задания'>
              <Menu.Item value='js'>JavaScript</Menu.Item>
              <Menu.Item value='cpp'>C++</Menu.Item>
              <Menu.Item value='golang'>Golang</Menu.Item>
            </Menu.List>
            <Menu.Item value='contacts'>Контакты</Menu.Item>
          </Menu>
        );
      `} />
      <Menu
        variant='vertical'
        style={{ width: '200px' }}
        active={withList}
        onChange={v=> setWithList(v)}
      >
        <Menu.Item value='home'>Главная</Menu.Item>
        <Menu.Item value='about'>О нас</Menu.Item>
        <Menu.List title='Задания'>
          <Menu.Item value='js'>JavaScript</Menu.Item>
          <Menu.Item value='cpp'>C++</Menu.Item>
          <Menu.Item value='golang'>Golang</Menu.Item>
        </Menu.List>
        <Menu.Item value='contacts'>Контакты</Menu.Item>
      </Menu>
    </>
  );

}
