import React from 'react';
import s from '../../../../common/Breadcrumbs/Separator/index.scss';

export default function Separator({ separator }) {

  if (separator) {
    return separator;
  }

  return (
    <div className={s.breadcrumbsSeparator} />
  );

}
