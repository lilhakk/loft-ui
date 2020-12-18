import React from 'react';
import { NavLink } from 'react-router-dom';
import * as components from '../ui';
import s from './index.scss';

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
            to={'/' + key.toLowerCase()}
          >{key}</NavLink>;
        })
      }
    </div>
  );

}
