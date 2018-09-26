import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import VueHotkey from "v-hotkey";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueHotkey);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
