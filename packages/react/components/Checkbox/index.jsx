import React from 'react';
import PropTypes from 'prop-types';
import Guide from './Guide';
import { c } from '../../helpers';
import s from './index.scss';

function Checkbox({
  selected,
  onClick,
  children
}) {
  return (
    <div
      className={c(s.checkbox, { [s.active]: selected })}
    >
      <div className={s.iconCase} onClick={onClick}>
        <div className={s.icon} />
      </div>
      <div className={s.label} onClick={onClick}>{children}</div>
    </div>
  );
};

Checkbox.Guide = Guide;

Checkbox.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.object,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  selected: false,
  onClick: null
};

export default Checkbox;
