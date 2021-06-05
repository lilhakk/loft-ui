import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Rating/index.scss';

function Rating({
  // value,
  // total,
  // count,
  // isHalf,
  // className,
  // classIcon,
  // classIconActive,
  // classIconSelect,
  // onChange
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div
      className={s.loftRating}
      onMouseLeave={()=> setHoverIndex(-1)}
    >
      {
        new Array(5).fill(true).map((item, index)=> (
          <div
            className={c(s.loftRatingItem, {
              [s.loftRatingItemLastHover]: index === hoverIndex,
              [s.loftRatingItemHover]: index <= hoverIndex,
              [s.loftRatingItemActive]: index <= activeIndex
            })}
            onMouseMove={()=> setHoverIndex(index)}
            onClick={()=> setActiveIndex(index)}
          />
        ))
      }
    </div>
  );

}

Rating.Guide = Guide;

Rating.defaultProps = {
  value: 50,
  total: 100,
  count: 5
};

Rating.propTypes = {
  value: PropTypes.number,
  total: PropTypes.number,
  count: PropTypes.count
};

export default Rating;
