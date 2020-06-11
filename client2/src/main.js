import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router/routes'
import Config from './../config/index.js'
import { ValidationProvider } from 'vee-validate';


Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueRouter)

const router = new VueRouter ({
  routes: Routes,
  mode: 'history'
});
export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
