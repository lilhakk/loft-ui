import initReact from './react';
import initVue from './vue';
import initSvelte from './svelte';
import s from './index.scss';

if (window.location.pathname.split('/')[1] === 'react') {
  initReact();
} else if (window.location.pathname.split('/')[1] === 'vue') {
  initVue();
} else if (window.location.pathname.split('/')[1] === 'svelte') {
  initSvelte();
}

function addNav() {
  const nav = document.createElement('div');
  nav.classList.add(s.nav);

  const itemReact = document.createElement('a');
  itemReact.href = '/react/';
  itemReact.classList.add(s.navItem, s.navItemReact);
  if (window.location.pathname.split('/')[1] === 'react') {
    itemReact.classList.add(s.navItemActive);
  }
  nav.append(itemReact);

  const itemVue = document.createElement('a');
  itemVue.href = '/vue/';
  itemVue.classList.add(s.navItem, s.navItemVue);
  if (window.location.pathname.split('/')[1] === 'vue') {
    itemVue.classList.add(s.navItemActive);
  }
  nav.append(itemVue);

  const itemSvelte = document.createElement('a');
  itemSvelte.href = '/svelte/';
  itemSvelte.classList.add(s.navItem, s.navItemSvelte);
  if (window.location.pathname.split('/')[1] === 'svelte') {
    itemSvelte.classList.add(s.navItemActive);
  }
  nav.append(itemSvelte);

  document.body.append(nav);
}
addNav();
