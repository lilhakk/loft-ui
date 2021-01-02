import React from 'react';
import Guide from './Guide';
import { c } from '../../helpers';
import s from './index.scss';

function Pagination({
  className,
  style,
  count = 5,
  page = 1,
  onChange
}) {
  if (!onChange) return null;

  const getArrayPagination = (count, page)=> {
    const countShow = (count < 5) ? count : 5;
    const startIndex = page - 2;
    const arr = [];

    for (let index = startIndex; arr.length < countShow; index++) {
      if (index > count) {
        arr.unshift(arr[0] - 1);
        continue;
      }
      if (index > 0) {
        arr.push(index);
      }
    }

    return arr;
  };

  const numbersPage = getArrayPagination(count, page);
  return count > 1 && (
    <div
      className={c(s.pagination, className)}
      style={style}
    >
      <div className={c(s.paginationFastLink, { [s.paginationHide]: page === 1 })}>
        {page !== 1 && <div className={s.arrow} onClick={()=> onChange(page - 1)}>{'<'}</div>}
      </div>

      <div className={s.list}>
        {
          numbersPage[0] !== 1 &&
          <>
            <div className={s.item} onClick={()=> onChange(1)}>1</div>
            <div className={c(s.item, s.itemPure)}>..</div>
          </>
        }
        {
          numbersPage.map((number, index)=> (
            <div
              className={c(s.item, { [s.active]: page === number })}
              onClick={()=> onChange(number)}
              key={index}
            >{number}</div>
          ))
        }
        {
          numbersPage[numbersPage.length - 1] !== count &&
          <>
            <div className={c(s.item, s.itemPure)}>..</div>
            <div className={s.item} onClick={()=> onChange(count)}>{count}</div>
          </>
        }
      </div>

      <div className={c(s.paginationFastLink, { [s.paginationHide]: page === count })}>
        {
          page !== count &&
          <div className={s.arrow} onClick={()=> onChange(page + 1)}>{'>'}</div>
        }
      </div>
    </div>
  );
};

Pagination.Guide = Guide;

export default Pagination;
