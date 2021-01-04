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
      onClick={onClick}
      className={c(s.checkbox, { [s.active]: selected })}
    >
      <div className={s.iconCase}>
        <div className={s.icon} />
      </div>
      <div className={s.label}>{children}</div>
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
