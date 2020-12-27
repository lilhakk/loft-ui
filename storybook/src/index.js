import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './components/mdxComponents';
import Routers from './routes';
import './index.scss';

const rootElement = document.getElementById('root');

const rootComponent = (
  <BrowserRouter>
    <MDXProvider components={mdxComponents}>
      <Routers />
    </MDXProvider>
  </BrowserRouter>
);

render(rootComponent, rootElement);
