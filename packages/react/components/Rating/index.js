import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from '../../helpers';
import guide from './index.mdx';
import s from './index.scss';

// isHalf
// classIcon
// classIconActive
// classIconSelect
/*
  {
    value,
    total,
    count,
    onChange
  }
*/

function Rating() {
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

Rating.guide = guide;

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
