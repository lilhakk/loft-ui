import React, { useRef, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Tooltip/index.scss';

const EL_ROOT = document.getElementById('root');

function Tooltip ({
  children,
  style,
  className,
  content
}) {
  const [visible, setVisible] = useState(false);
  const [contentStyle, setContentStyle] = useState(style);
  const refCaption = useRef();
  const refContent = useRef();

  useEffect(() => {
    refCaption.current.addEventListener('mouseover', onMouseOver)
  }, []);

  function onMouseOver () {
    refCaption.current.addEventListener('mouseleave', onMouseLeave);
    setVisible(true);
  }

  function onMouseLeave () {
    setVisible(false);
    refCaption.current.removeEventListener('mouseleave', onMouseLeave);
  }

  function onEnter () {
    const captionRect = refCaption.current.getBoundingClientRect();
    const contentRect = refContent.current.getBoundingClientRect();
    const topPosition = captionRect.top + document.documentElement.scrollTop;

    setContentStyle({
      ...style,
      top: topPosition - contentRect.height - 5,
      left: captionRect.left + (captionRect.width / 2) - (contentRect.width / 2),
      opacity: 0
    });
  }

  function onEntering () {
    const captionRect = refCaption.current.getBoundingClientRect();
    const contentRect = refContent.current.getBoundingClientRect();
    const topPosition = captionRect.top + document.documentElement.scrollTop;

    setContentStyle({
      ...style,
      top: topPosition - contentRect.height - 5,
      left: captionRect.left + (captionRect.width / 2) - (contentRect.width / 2),
      opacity: 1
    });
  }

  function onExit () {
    const captionRect = refCaption.current.getBoundingClientRect();
    const contentRect = refContent.current.getBoundingClientRect();
    const topPosition = captionRect.top + document.documentElement.scrollTop;

    setContentStyle({
      ...style,
      top: topPosition - contentRect.height - 5,
      left: captionRect.left + (captionRect.width / 2) - (contentRect.width / 2),
      opacity: 0
    });
  }

  return (
    <>
      <div ref={refCaption} {...children.props} />
      {
        createPortal(<CSSTransition
          in={visible}
          timeout={300}
          unmountOnExit
          onEnter={onEnter}
          onEntering={onEntering}
          onExit={onExit}
        >
          <div
            ref={refContent}
            className={c(s.content, className)}
            style={contentStyle}
          >{content}</div>
        </CSSTransition>, EL_ROOT)
      }
    </>
  );
}

Tooltip.Guide = Guide;

export default Tooltip;
