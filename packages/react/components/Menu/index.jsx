import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Guide from './Guide';
import MenuItem from './components/Item';
import MenuList from './components/List';
import c from 'clsx';
import s from '../../../common/Menu/index.scss';

function Menu ({
  children,
  className,
  style,
  variant,
  active,
  onChange,
}) {
  children = React.Children.toArray(children).map(child=> {
    return React.cloneElement(child, {
      active,
      _nested: 1,
      _onChange: (value, label)=> onChange(value, label),
      ...child.props
    });
  });

  return (
    <div
      style={style}
      className={c(s.menu, s[variant], className)}
    >
      {children}
    </div>
  );
}

Menu.Guide = Guide;
Menu.Item = MenuItem;
Menu.List = MenuList;

Menu.defaultProps = {
  variant: 'horizontal'
};

Menu.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical'])
};

export default Menu;
