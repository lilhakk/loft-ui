import React, { useMemo, useRef, useEffect } from 'react';
import Prism from 'prismjs';
// import ResizeObserver from "resize-observer-polyfill";

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

// remove
const randomString = length=> {
  let res = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return res;
};

// remove
export const useId = ()=> {
  return useMemo(()=> randomString(16), []);
};

export function Code ({ v, lang = 'jsx' }) {
  const ref = useRef();

  useEffect(() => {
    Prism.highlightElement(ref.current);
  }, []);

  const code = v
    .replace(/        (.*)/gi, '$1')
    .trim();

  return (
    <pre className={'language-' + lang}>
      <code
        ref={ref}
        className={'language-' + lang}
      >{code}</code>
    </pre>
  );

}

export function InlineCode ({ children }) {
  return <code className="inline_code">{children}</code>
}
