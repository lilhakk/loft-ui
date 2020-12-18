import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { c } from 'helpers';
import guide from './index.mdx';
import s from './index.scss';
import { Modal_F } from '..';

const TIME_ANIMATION = 400;
let MOUSE_POS = {};

window.addEventListener('click', clickMouse, true);
function clickMouse(e) {
  const scrollTop = document.documentElement.scrollTop;

  MOUSE_POS = {
    x: e.pageX,
    y: e.pageY - scrollTop
  };

  setTimeout(()=> (MOUSE_POS = {}), 100);
};

function Modal() {
  const modal = {};
  const [styleModal, setStyleModal] = useState(null);
  const [isShow, setIsShow] = useState(null);

  useEffect(()=> {
    if (modal.data) {
      setStyleModal({ left: MOUSE_POS.x, top: MOUSE_POS.y });
      setTimeout(()=> {
        setIsShow(true);
      }, 50);
    }
  }, [modal.data]);

  const hide = ()=> {
    setIsShow(false);
    setTimeout(()=> {
      setStyleModal(null);
      modal.set(null);
    }, TIME_ANIMATION);
  };

  const ok = ()=> {
    modal.data.onDone && modal.data.onDone();
    hide();
  };

  const cancel = ()=> {
    modal.data.onCancel && modal.data.onCancel();
    hide();
  };

  if (!modal.data) return null;

  let _styleModal = styleModal;
  if (modal.data?.height && isShow) {
    _styleModal = {
      ..._styleModal,
      minHeight: modal.data?.height,
      height: modal.data?.height
    };
  }

  return (
    <>
      <div className={c(s.case, { [s.show]: isShow })}>
        <div className={s.overlay} onClick={hide} />

        <div className={c(s.modal)} style={_styleModal}>
          <div className={s.header}>{modal.data.title}</div>

          <div className={s.content}>
            {modal.data.content}
          </div>

          <div className={s.actions}>
            {
              (modal.data.nameCancel || modal.data.onCancel || modal.data.hasCancel) &&
              <Button variant="line" className={s.button} onClick={()=> cancel()}>
                {modal.nameCancel || 'Отмена'}
              </Button>
            }
            <Button className={s.button} onClick={()=> ok()}>
              {modal.data.nameDone || 'Ок'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.guide = guide;

export default Modal;
