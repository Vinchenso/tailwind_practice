import Vue from "vue";
// import App from "./App.vue";
import WPusher from "./components/wpusher";
Vue.config.productionTip = false;

new Vue({
  render: h => h(WPusher)
}).$mount("#app");
