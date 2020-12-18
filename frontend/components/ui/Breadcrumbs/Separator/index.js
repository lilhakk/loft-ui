import React from 'react';
import s from './index.scss';

export default function Separator({ separator }) {

  if (separator) {
    return separator;
  }

  return (
    <div className={s.sep} />
  );

}
