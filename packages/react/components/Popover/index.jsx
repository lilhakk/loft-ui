import React, { useEffect, useRef, useState } from 'react';
import Portal from '../Portal';
import c from 'clsx';
import s from '../../../common/Popover/index.scss';

const Div = ({ children })=> children;

// TODO
// resize
// Scrollbar
// left, right
// top, bottom
const Popover = ({
  show,
  isCaptionAction = true,
  // position = 'left',
  animation = 'default',
  top,
  left,
  width,
  maxHeight,
  onChange,
  className,
  classWrapper,
  children
})=> {
  const [render, setRender] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const refCaption = useRef();
  const refScrollInfo = useRef();
  const refContent = useRef();

  useEffect(()=> {
    if (show) {
      const popovers = document.getElementsByClassName(s.popoverActive);
      popovers[0]?.click();
      onShow();
    } else {
      onHide();
    }
  }, [show]);

  let caption = null;
  let content = null;
  React.Children.toArray(children).forEach((child, index)=> {
    if (child.type === Popover.Caption) {
      if (index !== 0) Error('Caption need use first child');
      caption = child.props.children;
      return;
    }

    if (child.type === Popover.Content) {
      if (index !== 1) Error('Caption need use two child');
      content = child.props.children;
      return;
    }
  });

  const onShow = ()=> {
    setRender(true);
    setTimeout(()=> {
      document.documentElement.addEventListener('click', onOverlay);
      setIsShow(true);
    }, 100);
  };

  const onHide = ()=> {
    onChange(false);
    setTimeout(()=> {
      document.documentElement.removeEventListener('click', onOverlay);
      setIsShow(false);
    }, 300);
  };

  const onOverlay = e=> {
    if (refScrollInfo?.current?.isMoveScroll) return;
    if (!e.target.closest('.' + s.content) && !e.target.closest('.' + s.caption)) {
      onHide();
    }
  };

  let _styleContent = {};
  if (width) _styleContent.width = width + 'px';
  else _styleContent.width = refCaption?.current?.offsetWidth + 'px';

  if (isShow) {
    if (maxHeight) {
      _styleContent.height = maxHeight + 'px';
      _styleContent.maxHeight = maxHeight + 'px';
    } else if (animation === 'height') {
      _styleContent.height = refContent?.current?.offsetHeight;
    }

    _styleContent = {
      ..._styleContent,
      top: refCaption?.current?.offsetTop + refCaption?.current?.offsetHeight,
      left: width
        ? (refCaption?.current?.offsetLeft - +width + +refCaption?.current?.offsetWidth)
        : refCaption?.current?.offsetLeft
    };
  } else {
    _styleContent.height = '0px';
  }

  if (top) _styleContent.marginTop = top;
  if (left) _styleContent.marginLeft = left;
  if (!show && animation === 'height') {
    _styleContent = { ..._styleContent, height: '0px',
      paddingTop: 0, paddingBottom: 0
    };
  }

  const Wrapper = render ? Portal : Div;
  return (
    <div className={c({ [s.popoverActive]: isShow }, className)}>
      <div
        onClick={isCaptionAction ? ()=> onChange(!show) : null}
        ref={refCaption}
        className={s.caption}
      >{caption}</div>
      {
        render &&
        <Wrapper
          className={c(classWrapper, s[animation], s.content, {
            [s.show]: show,
            [s.hide]: !show
          })}
          style={_styleContent}
        >
          <div
            ref={refContent}
            maxHeight={maxHeight}
            refScrollInfo={refScrollInfo}
            width={width}
          >{content}</div>
        </Wrapper>
      }
    </div>
  );
};

Popover.Caption = ({ children })=> children;
export default Popover;
