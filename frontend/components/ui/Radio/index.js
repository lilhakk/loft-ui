import React from 'react';
import { c } from 'helpers';
import guide from './index.mdx';
import s from './index.scss';

// disabled
function Radio({
  value,
  onChange,
  children
}) {

  children = React.Children.toArray(children);

  children = children.map(child=> {
    return React.cloneElement(child, {
      activeValue: value,
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
  activeValue,
  _onChange
})=> {
  return (
    <div
      className={c(s.radio, { [s.active]: activeValue === value })}
      onClick={()=> _onChange(value)}
    >
      <div className={s.iconCase}>
        <div className={s.icon} />
      </div>
      <div className={s.label}>{children}</div>
    </div>
  );
};

Radio.guide = guide;

export default Radio;
