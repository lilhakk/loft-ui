import Vue from 'vue';
import App from './App';

export default function initVue() {
  new Vue({
    el: '#root',
    components: { App },
    template: '<App/>'
  });
}
