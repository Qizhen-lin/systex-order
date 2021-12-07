import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "./router";
import Index from './Index.vue';
import "@/scss/share.scss";

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Index),
}).$mount('#app')

