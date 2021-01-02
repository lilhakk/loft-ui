import initReact from './react';
import initVue from './vue';
import initSvelte from './svelte';

if (window.location.pathname.split('/')[1] === 'react') {
  initReact();
} else if (window.location.pathname.split('/')[1] === 'vue') {
  initVue();
} else if (window.location.pathname.split('/')[1] === 'svelte') {
  initSvelte();
}
