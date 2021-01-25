import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import c from 'clsx';
import {
  CASE_STYLES,
  POSITION_STYLES_HIDE,
  POSITION_NAMES
} from '../constants.json';
import s from '../../../../common/Drawer/index.scss';

const EL_ROOT = document.getElementById('root');

export default function DrawerFixed ({
  children,
  visible,
  position = 'left',
  onDismiss
}) {
  const [drawerStyle, setDrawerStyle] = useState({});
  const [overlayStyle, setOverlayStyle] = useState({});

  function onEnter () {
    setDrawerStyle({
      transform: [POSITION_NAMES[position]] + `(${POSITION_STYLES_HIDE[position]})`
    });
    setOverlayStyle({ opacity: 0 });
  }

  function onEntering () {
    setDrawerStyle({ transform: [POSITION_NAMES[position]] + '(0)' });
    setOverlayStyle({ opacity: 1 });
  }

  function onExit () {
    setDrawerStyle({
      transform: [POSITION_NAMES[position]] + `(${POSITION_STYLES_HIDE[position]})`
    });
    setOverlayStyle({ opacity: 0 });
  }

  const renderContent = (
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
      className={s.drawerCase}
      style={CASE_STYLES[position]}
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
    >
      <div>
        <div
          style={drawerStyle}
          className={c(s.drawerFixed, s[position])}
        >{children}</div>
        <div
          style={overlayStyle}
          className={s.drawerOverlay}
          onClick={onDismiss}
        />
      </div>
    </CSSTransition>
  );


  return createPortal(renderContent, EL_ROOT);
}
