import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import Guide from './Guide';
import c from 'clsx';
import s from '../../../common/Popover/index.scss';

const EL_ROOT = document.getElementById('root');

function clearSelect () {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    document.selection.empty();
  }
}

// TODO: scrollbar, placements
function Popover ({
  style,
  className,
  content,
  children,
  visible,
  placement = 'bottom-start',
  hasOverlay = true,
  hasWidthCaption = false,
  onDismiss
}, ref) {
  const [contentStyle, setContentStyle] = useState(style);
  const refCaption = useRef();
  const refContent = useRef();

  function onEnter () {
    document.documentElement.style.userSelect = 'none';
    const captionRect = refCaption.current.getBoundingClientRect();
    const contentRect = refContent.current.getBoundingClientRect();
    const topPosition = captionRect.top + document.documentElement.scrollTop;

    const width = hasWidthCaption ? captionRect.width : contentRect.width;
    if (!width) width = 'auto';

    setContentStyle({
      ...style,
      width,
      top: topPosition + captionRect.height - 5,
      left: captionRect.left,
      opacity: 0
    })
  }

  function onEntering () {
    const captionRect = refCaption.current.getBoundingClientRect();
    const contentRect = refContent.current.getBoundingClientRect();
    const topPosition = captionRect.top + document.documentElement.scrollTop;

    const width = hasWidthCaption ? captionRect.width : contentRect.width;
    if (!width) width = 'auto';

    setContentStyle({
      ...style,
      width,
      top: topPosition + captionRect.height + 5,
      left: captionRect.left,
      opacity: 1
    });
  }

function onEntered () {
    document.documentElement.style.userSelect = '';
    if (hasOverlay) {
      window.addEventListener('click', onClickOverlay, true);
    }
  }

  function onExit () {
    document.documentElement.style.userSelect = 'nonde';
    const captionRect = refCaption.current.getBoundingClientRect();
    const contentRect = refContent.current.getBoundingClientRect();
    const topPosition = captionRect.top + document.documentElement.scrollTop;

    const width = hasWidthCaption ? captionRect.width : contentRect.width;
    if (!width) width = 'auto';

    setContentStyle({
      ...style,
      width,
      top: topPosition + captionRect.height - 5,
      left: captionRect.left,
      opacity: 0
    });
  }

  function onExited () {
    document.documentElement.style.userSelect = '';
    clearSelect();
    onDismiss();
  }

  function onClickOverlay (e) {
    if (!refCaption.current.contains(e.target) &&
        !refContent.current.contains(e.target)) {
      window.removeEventListener('click', onClickOverlay, true);
      onDismiss && onDismiss();
    }
  }

  function stopSelect (e) {
    e.preventDefault();
  }

  return (
    <>
      <div ref={refCaption}>{children}</div>
      {
        createPortal(<CSSTransition
          in={visible}
          timeout={300}
          unmountOnExit
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExited={onExited}
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
};

Popover.Guide = Guide;

export default Popover;
