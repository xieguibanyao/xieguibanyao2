import Vue from 'vue'
import ElementUI from 'element-ui' //New Added
import 'element-ui/lib/theme-chalk/index.css' //New Added
import App from './App'
import router from './router'
import VueAMap from 'vue-amap';
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(VueAMap);
Vue.config.productionTip = false
Vue.use(ElementUI) // New Added

VueAMap.initAMapApiLoader({
  // 高德的key
  key: '0079ff9e0e07d6e870c50fbe8d59399a',
  securityJsCode: 'c03a3c7b31614e3e29dc60a91aa046ca',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
