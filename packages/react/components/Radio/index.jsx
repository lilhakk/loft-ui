import React from 'react';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Radio/index.scss';

// disabled
function Radio({
  active,
  onChange,
  children
}) {
  children = React.Children.toArray(children);

  children = children.map(child=> {
    return React.cloneElement(child, {
      active,
      _onChange: onChange
    });
  });

  return (
    <div className={s.radioCase}>
      {children}
    </div>
  );
};

Radio.Item = ({
  children,
  value,
  active,
  _onChange
})=> {
  return (
    <div
      className={c(s.radio, { [s.active]: active === value })}
      onClick={()=> _onChange(value)}
    >
      <div className={s.iconCase}>
        <div className={s.icon} />
      </div>
      <div className={s.label}>{children}</div>
    </div>
  );
};

Radio.Guide = Guide;

export default Radio;
