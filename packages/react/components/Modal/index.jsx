import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Modal/index.scss';

const EL_ROOT = document.getElementById('root');

let MOUSE_POS = {};
window.addEventListener('click', onClickWindow, true);
function onClickWindow(event) {
  const clientRect = event.target.getBoundingClientRect();

  MOUSE_POS = {
    x: clientRect.left,
    y: clientRect.top
  };
};

function Modal({
  children,
  style = {},
  overlayStyle = {},
  className,
  visible,
  title,
  onDone,
  onCancel,
  onDismiss
}) {
  const [modalStyle, setModalStyle] = useState(style);
  const [_overlayStyle, setOverlayStyle] = useState(overlayStyle);
  const [mousePosition, setMousePosition] = useState({});

  function onEnter () {
    document.documentElement.style.overflow = 'hidden';
    setMousePosition(MOUSE_POS);
    setOverlayStyle({ ...overlayStyle, opacity: 0 });

    setModalStyle({
      ...style,
      opacity: 0,
      transform: 'scale(0.3)',
      left: MOUSE_POS.x,
      top: MOUSE_POS.y,
      transformOrigin: `0px 0px`
    })
  }

  function onEntering () {
    setOverlayStyle(overlayStyle);
    setModalStyle(style)
  }

  function onExit () {
    document.documentElement.style.overflow = '';
    setMousePosition({});
    setOverlayStyle({ ...overlayStyle, opacity: 0 });

    setModalStyle({
      ...style,
      opacity: 0,
      transform: 'scale(0.3)',
      left: mousePosition.x,
      top: mousePosition.y,
      transformOrigin: `0px 0px`
    })
  }

  const renderContent = (
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
    >
      <div>
        <div
          className={s.overlay}
          style={_overlayStyle}
          onClick={onDismiss}
        />

        <div
          style={modalStyle}
          className={c(s.modal, className)}
        >
          <div className={s.case}>
            {!!title && <div className={s.title}>{title}</div>}
            <div className={s.content}>{children}</div>
          </div>

          <div className={s.actions}>
            {
              onCancel &&
              <Button size='s' variant='text' onClick={onCancel}>
                Отмена
              </Button>
            }

            {
              onDone &&
              <Button size='s' className={s.action} onClick={onDone}>
                Ок
              </Button>
            }
          </div>
        </div>
      </div>
    </CSSTransition>
  );

  return createPortal(renderContent, EL_ROOT);
}

Modal.Guide = Guide;



export default Modal;
