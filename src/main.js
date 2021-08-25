import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import '@/assets/css/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
      document.title = config.title + "_" + to.meta.title
  }
  next()
})