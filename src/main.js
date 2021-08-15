import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request1} from '@/network/request'
import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用懒加载的插件
Vue.use(VueLazyLoad, {
  loading: require("@/assets/images/common/placeholder.png")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// request1({
//   url: '/home/data'
// }).then(
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   })