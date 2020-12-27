import initReact from './react';
import initVue from './vue';
// import initSvetle from './svetle';
// import initCommon from './common';
import s from './index.scss';

function getStorybook() {
  if (window.location.pathname.split('/')[1] === 'react') {
    return initReact();
  }

  if (window.location.pathname.split('/')[1] === 'vue') {
    return initVue();
  }

  document.body.innerHTML = `
    <div class="${s.home}">Loft UI</div>
  `;
}

getStorybook();
