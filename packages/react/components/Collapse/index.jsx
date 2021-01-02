import React, { useRef, useEffect, useState } from 'react';
import { c, useResize } from '../../helpers';
import Guide from './Guide';
import s from './index.scss';

const STEPS = {
  CLOSE: 'close',
  OPEN: 'open'
};

function Collapse({ visible, children }) {
  const refChild = useRef();
  const [step, setStep] = useState(visible ? STEPS.OPEN : STEPS.CLOSE);
  const [fullHeight, setFullHeight] = useState(null);
  const [isUpdateRoot, setIsUpdateRoot] = useState(false);

  useEffect(()=> {
    if (visible) {
      setFullHeight(getValidHeight(refChild.current));
      setStep(STEPS.OPEN);
    } else {
      setFullHeight(null);
    }
  }, [visible]);

  useResize(refChild, ()=> {
    if (!fullHeight) return;

    const isOpen = step === STEPS.OPEN;
    if (isOpen && (getValidHeight(refChild.current) !== fullHeight)) {
      setFullHeight(getValidHeight(refChild.current));
      setIsUpdateRoot(true);
    }

    if (isOpen && (getValidHeight(refChild.current) === fullHeight)) {
      setIsUpdateRoot(false);
    }
  }, [step, fullHeight]);

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
      className={c(s.collapse, s[step])}
    >
      <div ref={refChild}>{children}</div>
    </div>
  );

}

function getValidHeight(node) {
  return node.getBoundingClientRect().height;
}

Collapse.Guide = Guide;

export default Collapse;
