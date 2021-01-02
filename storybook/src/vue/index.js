import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App';

export default function initVue() {

  Vue.use(VueRouter);

  new Vue({
    render: h => h(App),
    components: { App },
    template: '<App />'
  }).$mount('#root');

}
