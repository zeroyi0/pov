import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 全局样式
import './assets/global.css'
// axios封装
import http from './utils/http'
// storage工具类封装
import Storage from './utils/storage'

Vue.prototype.$http = http
Vue.prototype.$storage = Storage

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
