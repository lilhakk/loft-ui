import React from 'react';
import { Link } from 'react-router-dom';
import c from 'clsx';
import s from '../../../../common/Menu/index.scss';

export default function MenuItem ({
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
  const classes = c(s.menuItem, className, {
    [s.menuItemActive]: (value && active === value) || active === true
  });

  if (to) {
    return (
      <Link
        to={to}
        exact={(!!exact).toString()}
        style={_style}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  return (
    <div
      style={_style}
      className={classes}
      onClick={()=> _onChange(value)}
    >
      {children}
    </div>
  );
}
