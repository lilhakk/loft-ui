import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from '@loft-ui/react';
import * as components from '@loft-ui/react';
import s from '../index.scss';

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Menu
      variant='vertical'
      className={s.sidebar}
    >
      {
        Object.keys(components).map(key=> {
          return <Menu.Item
            key={key}
            exact
            active={'/react/' + key.toLowerCase() === pathname}
            to={'/react/' + key.toLowerCase()}
          >{key}</Menu.Item>;
        })
      }
    </Menu>
  );

}
