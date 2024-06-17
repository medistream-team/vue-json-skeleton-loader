import Vue from "vue";
import App from "./App.vue";
import VSkeletonLoader from 'vue-json-skeleton-loader';

Vue.config.productionTip = false;
Vue.use(VSkeletonLoader);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
