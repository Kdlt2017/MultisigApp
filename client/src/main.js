// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
// Vue.component('ninjas', Ninjas)
/* eslint-disable no-new */

// Custom directives
/* Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
}) */
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '600px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

// Custom Filters
/* Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
}) */
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
})
export const bus = new Vue()
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
