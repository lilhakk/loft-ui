import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import { c } from 'helpers';
import guide from './index.mdx';
import s from './index.scss';

function Button({
  className,
  style,
  color,
  children,
  variant,
  to,
  loading,
  onClick
}) {
  const [isHover, setIsHover] = useState(false);

  const _style = { ...style };
  const classes = c(s.button, s[variant], className);

  if (color) {
    if (variant !== 'text') _style.borderColor = color;
    if (variant === 'text' || variant === 'line') _style.color = color;
    if (variant === 'default' && isHover) _style.color = color;
    if (variant === 'default' && !isHover) _style.backgroundColor = color;
  }

  const eventProps = {
    onMouseOver: ()=> setIsHover(true),
    onMouseOut: ()=> setIsHover(false)
  };

  if (loading) {
    return (
      <div
        {...eventProps}
        style={_style}
        className={c(s.button, s.load, className)}
      >
        <Loader variant='dots' />
      </div>
    );
  }

  if (to) {
    return (
      <Link
        {...eventProps}
        to={to}
        className={classes}
        style={_style}
      >{children}</Link>
    );
  }

  return (
    <div
      {...eventProps}
      onClick={onClick}
      className={classes}
      style={_style}
    >{children}</div>
  );

};

Button.guide = guide;

Button.propTypes = {
  to: PropTypes.string,
  color: PropTypes.oneOf(['major', 'minor']),
  variant: PropTypes.oneOf(['default', 'line', 'text']),
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: 'major',
  variant: 'default',
  to: '',
  style: {},
  loading: false,
  onClick: null
};

export default Button;
