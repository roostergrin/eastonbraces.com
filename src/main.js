// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/app'
import router from './router'
import store from './shared/store'

/* eslint-disable */
import { vendors } from './resources/vendors'
import { fonts } from './resources/fonts'
import { Icon } from './resources/components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-enable */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
