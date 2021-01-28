import React from 'react';
import PropTypes from 'prop-types';
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

  if (variant === 'inside') {
    // TODO
  }
}

Drawer.Guide = Guide;

Drawer.propTypes = {
  children: PropTypes.object,
  visible: PropTypes.bool,
  position: PropTypes.string,
  variant: PropTypes.oneOf(['fixed', 'static', 'inside']),
  onDismiss: PropTypes.func
};

Drawer.defaultProps = {
  position: 'left',
  variant: 'fixed'
};

export default Drawer;
