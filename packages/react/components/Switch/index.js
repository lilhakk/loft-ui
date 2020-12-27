import React from 'react';
import { c } from '../../helpers';
// import PropTypes from 'prop-types';
import guide from './index.mdx';
import s from './index.scss';

function Switch({
  selected,
  style,
  className,
  // color,
  onClick
}) {
  return (
    <div
      className={c(s.switch, { [s.active]: selected })}
      style={style}
      onClick={onClick}
    >
      <div className={c(s.circle, className)} />
    </div>
  );
};

Switch.guide = guide;

Switch.propTypes = {};

export default Switch;
