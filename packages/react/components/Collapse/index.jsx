import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Guide from './Guide';
import s from '../../../common/Collapse/index.scss';

function Collapse ({ visible, children }) {
  const ref = useRef();
  const [toHeight, setToHeight] = useState(null);
  const [style, setStyle] = useState({});

  function onEnter () {
    setToHeight(ref.current.getBoundingClientRect().height);
    setStyle({ height: 0 })
  }

  function onExit () {
    setStyle({ height: ref.current.getBoundingClientRect().height + 'px' })
  }

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      style={style}
      unmountOnExit
      className={s.collapse}
      onEnter={onEnter}
      onEntering={()=> setStyle({ height: toHeight + 'px' })}
      onEntered={()=> setStyle({ height: 'auto' })}
      onExit={onExit}
      onExiting={()=> setStyle({ height: 0 })}
      onExited={()=> setStyle({})}
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
}

Collapse.Guide = Guide;

export default Collapse;
