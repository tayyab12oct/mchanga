import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./fonts/stylesheet.css";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/animate.css";
import "./css/responsive.css";
import "./css/custom.css";

createApp(App)
  .use()
  .use(router)
  .mount("#app");
