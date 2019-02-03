import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/index.styl'
import '@/permission.js'//路由守卫
import store from './store'
import utils from '@/utils/index.js'
import Cube from 'cube-ui'
Vue.use(Cube)
// viewport hack tools
var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
require('viewport-units-buggyfill').init({
  hacks: hacks
});
Vue.use(utils);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
