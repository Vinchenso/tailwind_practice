import WPPusher from "./components/wpusher.vue";
import TailwindComponents from "./components/TailwindComponents.vue";
import Home from "./components/home.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/wp-pusher", component: WPPusher },
  { path: "/tailwind-components", component: TailwindComponents },
  { path: "*", redirect: "/" }
];
