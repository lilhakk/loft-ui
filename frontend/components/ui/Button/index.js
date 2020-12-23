import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import { c } from 'helpers';
import guide from './index.mdx';
import s from './index.scss';

function Button({
  className,
  style,
  children,
  variant,
  to,
  loading,
  size,
  onClick
}) {
  const _style = { ...style };
  const classes = c(s.button, s[variant], s[size], className);

  if (loading) {
    return (
      <div
        style={_style}
        className={c(s.button, s.load, s.m, className)}
      >
        <Loader variant='dots' />
      </div>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        style={_style}
      >{children}</Link>
    );
  }

  return (
    <div
      onClick={onClick}
      className={classes}
      style={_style}
    >{children}</div>
  );

};

Button.guide = guide;

Button.propTypes = {
  to: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'line', 'text']),
  loading: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: 'default',
  to: '',
  style: {},
  loading: false,
  size: 'm',
  onClick: null
};

export default Button;
