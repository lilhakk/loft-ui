import React from 'react';
import PropTypes from 'prop-types';
import guide from './index.mdx';

function Rating({
  value,
  total,
  count,
  onChange
}) {

  return (
    <div>Rating</div>
  );

}

Rating.guide = guide;

Rating.defaultProps = {
  value: 50,
  total: 100,
  count: 10
};

Rating.propTypes = {
  value: PropTypes.number,
  total: PropTypes.number,
  count: PropTypes.count
};

export default Rating;
