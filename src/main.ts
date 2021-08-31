import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Vueaxios from 'vue-axios'
// Vue.prototype.$axios=axios //或修改为原型属性，即全局挂载axios


axios.defaults.baseURL = 'https://adny.utools.club/api'//设置一个基础请求地址
// Vue.prototype.$axios = axios// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
//在Ts下无效？？

createApp(App).use(store).use(router).mount('#app')
