import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Portal from '../Portal';
import { c } from 'helpers';
import guide from './index.mdx';
import s from './index.scss';

let MOUSE_POS = {};

window.addEventListener('click', clickMouse, true);
function clickMouse(e) {
  const scrollTop = document.documentElement.scrollTop;

  MOUSE_POS = {
    x: e.pageX,
    y: e.pageY - scrollTop
  };
};

// Modal.Content
// Modal.Actions

function Modal({
  children,
  style,
  className,
  visible,
  onDone,
  onDismiss,
  onCancel
}) {
  const [step, setStep] = useState('close');
  const [mousePositions, setMousePositions] = useState({});
  const [_style, setStyle] = useState({});

  useEffect(()=> {
    if (visible) {
      show();
    } else if (step === 'show') {
      hide();
    }
  }, [visible]);

  function show() {
    setStep('render');
    setMousePositions(MOUSE_POS);

    setStyle({
      left: MOUSE_POS.x,
      top: MOUSE_POS.y,
      transformOrigin: `0px ${MOUSE_POS.y - 270}px`
    });

    setTimeout(()=> {
      setStyle({});
      setStep('show');
    }, 100);
  }

  function hide() {
    setStep('render');

    setStyle({
      left: mousePositions.x,
      top: mousePositions.y,
      transformOrigin: `0px ${mousePositions.y - 270}px`
    });

    setTimeout(()=> {
      setStyle({});
      setStep('close');
    }, 300);
  }

  let title = null;
  let content = null;
  const actions = [];
  const other = [];
  React.Children.toArray(children).forEach(child=> {
    if (child.type.name === ModalTitle.name) {
      title = child;
      return;
    }

    if (child.type.name === ModalContent.name) {
      content = child;
      return;
    }

    if (child.type.name === ModalActions.name) {
      actions.push(child);
      return;
    }

    other.push(child);
  });

  // render
  // animation
  return (
    <Portal>
      {
        step !== 'close' &&
        <>
          <div className={s.overlay} onClick={onDismiss} />
          <div
            className={c(s.modal, { [s.show]: step === 'show' }, className)}
            style={_style}
          >
            <div className={s.case}>
              {
                !!title &&
                <div className={s.title}>{title}</div>
              }

              <div className={s.content}>{content || other}</div>
            </div>

            <div className={s.actions}>
              {!!actions && actions}

              {
                !actions &&
                <div></div>
              }
            </div>
          </div>
        </>
      }
    </Portal>
  );
};

Modal.guide = guide;

function ModalTitle({ children }) {
  return children;
};

function ModalContent({ children }) {
  return children;
};

function ModalActions({ children }) {
  return children;
};

Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;
export default Modal;
