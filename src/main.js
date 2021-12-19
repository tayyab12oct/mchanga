import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./fonts/stylesheet.css";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/animate.css";
import "./css/responsive.css";
import "./css/custom.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
