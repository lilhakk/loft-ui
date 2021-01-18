import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Collapse from '../Collapse';
import Guide from './Guide';
import { c } from '../../helpers';
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

Menu.Item = function MenuItem ({
  children,
  style,
  className,
  active,
  value,
  icon,
  exact,
  to,
  onClick,
  _nested,
  _onChange
}) {
  const _style = { paddingLeft: 24 * _nested, ...style };

  if (to) {
    return (
      <Link
        to={to}
        exact
        style={_style}
        className={c(s.menuItem, {
          [s.menuItemActive]: (value && active === value) || active === true
        })}
      >
        {children}
      </Link>
    )
  }

  return (
    <div
      style={_style}
      className={c(s.menuItem, {
        [s.menuItemActive]: (value && active === value) || active === true
      })}
      onClick={()=> _onChange(value)}
    >
      {children}
    </div>
  );
}

Menu.List = function MenuItem ({
  children,
  className,
  style,
  title,
  active,
  _nested,
  _onChange
}) {
  const [isShow, setIsShow] = useState(false);

  children = React.Children.toArray(children).map((child)=> {
    return React.cloneElement(child, {
      active,
      _onChange,
      _nested: _nested + 1
    });
  });

  const _style = { paddingLeft: 24 * _nested, ...style };
  return (
    <div className={c({ [s.listActive]: isShow }, className)}>
      <div
        style={_style}
        className={c(s.listTitle, { [s.listTitleActive]: isShow })}
        onClick={()=> setIsShow(!isShow)}
      >
        <span>{title}</span>
        <div className={c(s.arrow, { [s.arrowActive]: isShow })}>
          <div className={c(s.line)} />
          <div className={c(s.line)} />
        </div>
      </div>
      <Collapse visible={isShow}>
        {children}
      </Collapse>
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
