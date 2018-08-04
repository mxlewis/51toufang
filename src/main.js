// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store'
import tools from '@/utils/tools'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$post=tools.$post
Vue.prototype.$get=tools.$get
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
