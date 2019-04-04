import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http';

// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'http://192.168.6.84:5000/'  // api 即上面 vue.config.js 中配置的地址

console.log(process.env.VUE_APP_BASE_URI)

axios.defaults.baseURL = process.env.VUE_APP_BASE_URI
axios.defaults.timeout = 5000

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
