import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import guide from './index.mdx';
import s from './index.scss';

const EL_ROOT = document.getElementById('root');

const CASE_STYLES = {
  left: { justifyContent: 'flex-start' },
  right: { justifyContent: 'flex-end' },
  top: { alignItems: 'flex-start' },
  bottom: { alignItems: 'flex-end' }
};
const POSITION_STYLES_HIDE = {
  left: '-100%',
  top: '-100%',

  right: '100%',
  bottom: '100%'
};
const POSITION_NAMES = {
  left: 'translateX',
  right: 'translateX',

  top: 'translateY',
  bottom: 'translateY'
};

// mode absolute and relative
function Drawer({
  children,
  position = 'left',
  visible,
  // mode,
  onDismiss
}) {
  const [isShow, setIsShow] = useState(visible);

  useEffect(()=> {
    if (visible) onShow();
    else if (isShow) onHide();
  }, [visible]);

  const onShow = ()=> {
    setTimeout(()=> {
      setIsShow(true);
    }, 100);
  };

  const onHide = ()=> {
    setIsShow(false);
    setTimeout(()=> {
      onDismiss();
    }, 200);
  };

  const _styleDrawer = isShow
    ? { transform: [POSITION_NAMES[position]] + '(0)' }
    : { transform: [POSITION_NAMES[position]] + `(${POSITION_STYLES_HIDE[position]})` };

  const _styleOverlay = isShow
    ? { opacity: 1 }
    : { opacity: 0 };

  const renderContent = (
    <div className={s.case} style={CASE_STYLES[position]}>
      <div
        style={_styleDrawer}
        className={s.drawer}
      >{children}</div>
      <div
        className={s.overlay}
        style={_styleOverlay}
        onClick={onHide}
      />
    </div>
  );

  if (!visible) return null;
  return createPortal(renderContent, EL_ROOT);
};

Drawer.guide = guide;

Drawer.propTypes = {
  mode: PropTypes.string
};

Drawer.defaultProps = {
  mode: 'default' // default, static, inside
};

export default Drawer;
