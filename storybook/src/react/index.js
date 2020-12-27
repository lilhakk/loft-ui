import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './components/mdxComponents';
import App from './App';

export default function initReact() {
  const rootComponent = (
    <BrowserRouter>
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </BrowserRouter>
  );

  const rootElement = document.getElementById('root');
  render(rootComponent, rootElement);
}
