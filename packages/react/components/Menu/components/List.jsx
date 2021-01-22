import React, { useState } from 'react';
import Collapse from '../../Collapse';
import c from 'clsx';
import s from '../../../../common/Menu/index.scss';

export default function MenuItem ({
  children,
  className,
  style,
  title,
  active,
  _nested,
  _onChange
}) {
  const [isShow, setIsShow] = useState(false);

  children = React.Children.toArray(children).map((child)=> {
    return React.cloneElement(child, {
      active,
      _onChange,
      _nested: _nested + 1
    });
  });

  const _style = { paddingLeft: 24 * _nested, ...style };
  return (
    <div className={c({ [s.listActive]: isShow }, className)}>
      <div
        style={_style}
        className={c(s.listTitle, { [s.listTitleActive]: isShow })}
        onClick={()=> setIsShow(!isShow)}
      >
        <span>{title}</span>
        <div className={c(s.arrow, { [s.arrowActive]: isShow })}>
          <div className={c(s.line)} />
          <div className={c(s.line)} />
        </div>
      </div>
      <Collapse visible={isShow}>
        {children}
      </Collapse>
    </div>
  );
}
