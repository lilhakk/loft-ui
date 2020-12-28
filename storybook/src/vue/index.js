import Vue from 'vue';
import VueRouter from 'vue-router';
import { MDXProvider } from '@mdx-js/vue';
import mdxComponents from './components/mdxComponents';
import App from './App';

Vue.use(VueRouter);

new Vue({
  components: { App, MDXProvider },
  data: ()=> ({ mdxComponents }),
  template: `
    <MDXProvider v-bind:components="mdxComponents">
      <App />
    </MDXProvider>
  `
}).$mount('#root');
