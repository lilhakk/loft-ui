import App from './App';
import 'prism-svelte';

export default function initSvelte () {

  const app = new App({ target: document.getElementById('root') });
  window.app = app;

}
