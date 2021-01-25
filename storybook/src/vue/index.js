import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Menu from '@loft-ui/vue/components/Menu';
import MenuItem from '@loft-ui/vue/components/Menu/components/Item';
import MenuList from '@loft-ui/vue/components/Menu/components/List';

import Radio from '@loft-ui/vue/components/Radio';
import RadioItem from '@loft-ui/vue/components/Radio/Item';

import App from './App';

export default function initVue() {

  Vue.use(VueRouter);

  Vue.component(Menu.name, Menu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(MenuList.name, MenuList);

  Vue.component(Radio.name, Radio);
  Vue.component(RadioItem.name, RadioItem);

  new Vue({
    render: h => h(App),
    components: { App },
    template: '<App />'
  }).$mount('#root');

}
