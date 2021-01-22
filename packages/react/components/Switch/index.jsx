import React from 'react';
// import PropTypes from 'prop-types';
import Guide from './Guide';
import c from 'clsx';
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

Switch.Guide = Guide;

Switch.propTypes = {};

export default Switch;
