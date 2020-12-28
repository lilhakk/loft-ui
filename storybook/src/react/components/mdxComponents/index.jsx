import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import s from './index.scss';

function CodeBlock({ children }) {
  const _code = children.trim();

  return (
    <div className={s.highlight}>
      <Highlight {...defaultProps} theme={theme} code={_code} language='jsx'>
        {({ className, style, tokens, getLineProps, getTokenProps })=> (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i)=> (
              <div key={i} {...getLineProps({ line, key: i })} className={s.line}>
                <div className={s.lineNumber}>{i + 1}</div>
                <div className={s.lineContent}>
                  {line.map((token, key)=> (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default {
  h1: props=> <h1 {...props} className={s.h1} />,
  h2: props=> <h2 {...props} className={s.h2} />,
  p: props=> <p {...props} className={s.p} />,
  inlineCode: props=> <code {...props} className={s.code} />,
  code: CodeBlock
};
