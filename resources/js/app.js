require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import Notifications from 'vue-notification'

import router from './Router/index'
import store from './Store/index';
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Notifications)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});
