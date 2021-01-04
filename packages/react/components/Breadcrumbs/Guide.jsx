import React from 'react';
import Breadcrumbs from './';
import { Code, InlineCode as I } from '../../helpers';

export default function AvatarGuide () {

  return (
    <>
      <h1>Breadcrumbs</h1>
      <p>Хлебные крошки, используются для того чтобы пользователь лучше понимал локацию местонахождения на сайте</p>
      <Code v="import { Breadcrumbs } from 'loft-ui'" />

      <h2>Простой пример</h2>
      <Code v={`
        <Breadcrumbs>
          <Breadcrumbs.Item link='/'>Главная</Breadcrumbs.Item>
          <Breadcrumbs.Item link='/menu'>Меню</Breadcrumbs.Item>
          <Breadcrumbs.Item link='/menu/salads'>Салаты</Breadcrumbs.Item>
        </Breadcrumbs>
      `} />
      <Breadcrumbs
        data={[
          { link: '/breadcrumbs', title: 'Главная' },
          { link: '/breadcrumbs', title: 'Меню' },
          { link: '/breadcrumbs', title: 'Салаты' }
        ]}
      />

      <h2>Кастомный сепаратор</h2>
      <p>Можно применить любой разделитель с помощью jsx</p>
      <Code v={`
        const style = {
          width: '8px',
          height: '8px',
          backgroundColor: '#000000'
        }

        const separator = <div style={style} />

        <Breadcrumbs separator={separator}>
          <Breadcrumbs.Item link='/'>Главная</Breadcrumbs.Item>
          <Breadcrumbs.Item link='/menu'>Меню</Breadcrumbs.Item>
          <Breadcrumbs.Item link='/menu/salads'>Салаты</Breadcrumbs.Item>
        </Breadcrumbs>
      `} />
      <ExampleSeparator />
    </>
  )

}

function ExampleSeparator () {
  const style = {
    width: '4px',
    height: '4px',
    backgroundColor: '#000000',
    margin: '0 8px',
    borderRadius: 30
  }

  const separator = <div style={style} />

  return (
    <Breadcrumbs
      separator={separator}
      data={[
        { link: '/breadcrumbs', title: 'Главная' },
        { link: '/breadcrumbs', title: 'Меню' },
        { link: '/breadcrumbs', title: 'Салаты' }
      ]}
    />
  )
}
