import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import '../index.scss';

export default function initReact () {
  const rootComponent = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const rootElement = document.getElementById('root');
  render(rootComponent, rootElement);
}
