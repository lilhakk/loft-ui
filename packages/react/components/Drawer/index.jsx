import React, { useRef, useState } from 'react';
import DrawerFixed from './variants/Fixed';
import DrawerStatic from './variants/Static';
import Guide from './Guide';

function Drawer ({
  children,
  style,
  visible,
  position = 'left',
  variant = 'fixed',
  onDismiss
}) {
  if (variant === 'fixed') {
    return (
      <DrawerFixed
        visible={visible}
        position={position}
        onDismiss={onDismiss}
      >{children}</DrawerFixed>
    );
  }

  if (variant === 'static') {
    return (
      <DrawerStatic
        style={style}
        visible={visible}
      >{children}</DrawerStatic>
    );
  }
}

Drawer.Guide = Guide;

export default Drawer;
