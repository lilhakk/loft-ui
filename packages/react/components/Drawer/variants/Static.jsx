import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from '../../../../common/Drawer/index.scss';

export default function DrawerStatic ({
  children,
  style,
  visible,
  position = 'left'
}) {
  const drawerRef = useRef();
  const [drawerStyle, setDrawerStyle] = useState(style);
  const [toValue, setToValue] = useState(null);

  function onEnter () {
    setToValue(drawerRef.current.getBoundingClientRect().width);
    setDrawerStyle({
      ...style,
      width: '0px'
    })
  }

  function onEntering () {
    setDrawerStyle({
      ...style,
      transition: 'all 300ms',
      width: toValue + 'px'
    })
  }

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
      style={drawerStyle}
      onEnter={onEnter}
      onEntering={onEntering}
    >
      <div
        className={s.drawer}
        ref={drawerRef}
      >{children}</div>
    </CSSTransition>
  );
}
