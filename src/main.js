// 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Star from './components/Star/Star.vue'

// 注册全局组件

Vue.component('Star', Star)
new Vue ({
  el: '#app',
  render:h => h(App),
  router,

})
