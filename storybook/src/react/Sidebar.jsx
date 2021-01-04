import React from 'react';
import { NavLink } from 'react-router-dom';
import * as components from '@loft-ui/react';
import s from '../index.scss';

export default function Sidebar() {

  return (
    <div className={s.sidebar}>
      {
        Object.keys(components).map(key=> {
          return <NavLink
            exact
            key={key}
            className={s.sidebarItem}
            activeClassName={s.sidebarItemActive}
            to={'/react/' + key.toLowerCase()}
          >{key}</NavLink>;
        })
      }
    </div>
  );

}
