import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Guide from './Guide';
import { c } from '../../helpers';
import s from '../../../common/Menu/index.scss';

function Menu ({
  children,
  className,
  variant,
  active,
  onChange,
}) {
  children = React.Children.toArray(children).map(child=> {
    return React.cloneElement(child, {
      active,
      _nested: 1,
      _onChange: (value, label)=> onChange(value, label)
    });
  });

  return (
    <div className={s.menu}>
      {children}
    </div>
  );
}

Menu.Guide = Guide;

Menu.Item = function MenuItem ({
  children,
  className,
  active,
  value,
  icon,
  to,
  onClick,
  _nested,
  _onChange
}) {

  return (
    <div
      onClick={()=> _onChange(value)}
      className={c(s.menuItem, {
        [s.menuItemActive]: active === value
      })}
    >
      {children}
    </div>
  );

}

Menu.defaultProps = {
  variant: 'horizontal'
};

Menu.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical'])
};

export default Menu;
