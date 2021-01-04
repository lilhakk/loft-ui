import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Portal } from '@loft-ui/react';
import App from './App';
import '../index.scss';

export default function initReact () {
  const rootComponent = (
    <BrowserRouter>
      <Portal.Provider>
        <App />
      </Portal.Provider>
    </BrowserRouter>
  );

  const rootElement = document.getElementById('root');
  render(rootComponent, rootElement);
}
