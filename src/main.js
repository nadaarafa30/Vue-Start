import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
