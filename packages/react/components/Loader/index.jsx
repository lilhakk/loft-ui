import React from 'react';
import PropTypes from 'prop-types';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Loader/index.scss';

function Loader({
  variant,
  size,
  color,
  style
}) {
  const childStyle = {};
  if (color) {
    if (variant === 'circle') childStyle.borderTopColor = color;
    if (variant === 'dots') childStyle.backgroundColor = color;
  }

  if (variant === 'dots') {
    return (
      <div style={style} className={c(s.dots, s[size])}>
        <div className={c(s.dotsChild, s[size])} style={childStyle} />
        <div className={c(s.dotsChild, s[size])} style={childStyle} />
        <div className={c(s.dotsChild, s[size])} style={childStyle} />
      </div>
    );
  }

  return (
    <div style={style} className={c(s.circle, s[size])}>
      <div className={s[size]} style={childStyle} />
      <div className={s[size]} style={childStyle} />
      <div className={s[size]} style={childStyle} />
      <div className={s[size]} style={childStyle} />
    </div>
  );

};

Loader.Guide = Guide;

Loader.defaultProps = {
  size: 'm',
  variant: 'circle',
  color: '#3155da'
};

Loader.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};

export default Loader;
