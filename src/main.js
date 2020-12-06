import Vue from 'vue';
import App from './App.vue';
import 'amfe-flexible';

import './mock/index';
import './plugins/vant'
import 'vant/lib/index.less';

import './assets/font/iconfont/iconfont.css'
import router from './router';
import store from './store';
import http from './utils/http';
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// new Vue({
//   el: '#app',
//   store,
//   router,
//   components: { Root },
//   template: '<Root/>'
// });
