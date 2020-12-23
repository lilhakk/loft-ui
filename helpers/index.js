import { useMemo, useRef } from 'react';
import { randomString } from './methods';
// import ResizeObserver from "resize-observer-polyfill";

export * from './methods';
export { default as c } from 'clsx';

export const useMutation = (ref, callback, update = [])=> {
  const observer = useRef(null);

  useMemo(()=> {
    observer.current && observer.current.disconnect();
    if (!ref.current) return;

    observer.current = new MutationObserver(callback);
    observer.current.observe(ref.current, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }, [!!ref.currentm, ...update]);
};

export const useResize = (ref, callback, update = [])=> {
  const observer = useRef(null);

  useMemo(()=> {
    observer.current && observer.current.disconnect();
    if (!ref.current) return;

    observer.current = new ResizeObserver(callback);
    observer.current.observe(ref.current);
  }, [!!ref.current, ...update]);
};

export const useId = ()=> {
  return useMemo(()=> randomString(16), []);
};
