import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// iconfont
import './assets/font/iconfont.css'

Vue.config.productionTip = false

// axios
Vue.prototype.$http = axios.create({
  baseURL: 'https://restapi.amap.com/v3/weather/',
  timeout: 3000
})

new Vue({
  render: h => h(App),
}).$mount('#app')
