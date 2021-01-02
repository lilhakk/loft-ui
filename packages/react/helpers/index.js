import React, { useMemo, useRef, useEffect } from 'react';
import Prism from 'prismjs';
// import ResizeObserver from "resize-observer-polyfill";

export * from '../../../helpers';
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

export function Code ({ v }) {
  const ref = useRef();

  useEffect(() => {
    const code = v.replace(/    /gi, '').trim();
    const html = Prism.highlight(code, Prism.languages.jsx, 'language-jsx');
    ref.current.innerHTML = html;
  }, []);

  return (
    <pre className="language-jsx">
      <code ref={ref} className="language-jsx" />
    </pre>
  );

}

export function InlineCode ({ children }) {
  return <code className="inline_code">{children}</code>
}
