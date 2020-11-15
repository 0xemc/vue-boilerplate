import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Globally register your component
Vue.component('App', App);

new Vue({
  el: '#app',
  template: '<App/>',
})