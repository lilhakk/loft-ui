import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { c } from 'helpers';
import Separator from './Separator';
import guide from './index.mdx';
import s from './index.scss';

// Breadcrumbs.Item
function Breadcrumbs({
  className,
  data,
  separator
}) {

  if (!data) return null;
  return (
    <div className={c(s.breadcrumbs, className)}>
      {
        data.map((item, index)=> (
          <React.Fragment key={index}>
            {
              index + 1 === data.length
                ? <div className={c(s.breadcrumbsTitle, s.breadcrumbsTitleActive)}>{item.title}</div>
                : <Link className={s.breadcrumbsTitle} to={item.link}>{item.title}</Link>
            }
            {
              (index + 1 !== data.length)
              && <Separator separator={separator} />
            }
          </React.Fragment>
        ))
      }
    </div>
  );

};

Breadcrumbs.guide = guide;

Breadcrumbs.defaultProps = {
  data: [],
  separator: null
};

Breadcrumbs.propTypes = {
  data: PropTypes.array,
  separator: PropTypes.object,
  className: PropTypes.string
};

export default Breadcrumbs;
