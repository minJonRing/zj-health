import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Vant from 'vant'

import Element from 'element-ui'
import ElementPro from 'tqr-vue-element-pro'
import 'tqr-vue-element-pro/lib/tqr-vue-element-pro.css'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import { ajax } from '@/api/ajax'
import global from '@/global'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

// 全局组价
import btnReturn from '@/components/common/btn.return'

Vue.use({
  install(Vue) {
    Vue.component('btnReturn', btnReturn)
  }
})
Vue.use(Vant)

Vue.use(Element, {
  size: Cookies.get('size') || 'mini', // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.use(ElementPro, {
  ajax,
  global
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
