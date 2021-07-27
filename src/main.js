import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from '@/network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// request({
//   url: '/home/multidata'
// }).then(
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   })