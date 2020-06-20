import Vue from 'vue'
import App from './App.vue'
//导入router
import router from '@/router/index.js'

Vue.config.productionTip = false
//全局配置element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  //注入router
  router,
  render: h => h(App),
}).$mount('#app')
