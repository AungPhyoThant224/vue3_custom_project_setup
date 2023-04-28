import { createApp } from "vue";
import { createPinia } from "pinia";
import { useAppStore } from "./stores/modules/app";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores/index";
import i18n from "./locales/i18n";

import "./assets/main.css";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
