import App from './App';

export default function initSvelte () {

  const app = new App({ target: document.getElementById('root') });
  window.app = app;

}
