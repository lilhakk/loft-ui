import React, { useRef, useEffect, useState } from 'react';
import { c, useResize } from 'helpers';
import guide from './index.mdx';
import s from './index.scss';

const STEP_STATUSES = {
  CLOSE: 'close',
  OPEN: 'open'
};

function Collapse({ visible, children }) {
  const refChild = useRef();
  const [stepStatus, setStepStatus] = useState(visible ? STEP_STATUSES.OPEN : STEP_STATUSES.CLOSE);
  const [fullHeight, setFullHeight] = useState(null);
  const [isUpdateRoot, setIsUpdateRoot] = useState(false);

  useEffect(()=> {
    if (visible) {
      setFullHeight(getValidHeight(refChild.current));
      setStepStatus(STEP_STATUSES.OPEN);
    } else {
      setFullHeight(null);
    }
  }, [visible]);

  useResize(refChild, ()=> {
    if (!fullHeight) return;

    const isOpen = stepStatus === STEP_STATUSES.OPEN;
    if (isOpen && (getValidHeight(refChild.current) !== fullHeight)) {
      setFullHeight(getValidHeight(refChild.current));
      setIsUpdateRoot(true);
    }

    if (isOpen && (getValidHeight(refChild.current) === fullHeight)) {
      setIsUpdateRoot(false);
    }
  }, [stepStatus, fullHeight]);

  const style = {};
  if (fullHeight !== null && visible) {
    style.height = fullHeight;
  }
  if (isUpdateRoot) {
    style.transition = 'none';
  }

  return (
    <div
      style={style}
      className={c(s.collapse, s[stepStatus])}
    >
      <div ref={refChild}>{children}</div>
    </div>
  );

}

function getValidHeight(node) {
  return node.getBoundingClientRect().height;
}

Collapse.guide = guide;

export default Collapse;
