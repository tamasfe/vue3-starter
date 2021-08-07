import { createApp } from "vue";
import App from "./App.vue";

import quasar from "./plugins/quasar";
import i18n from "./plugins/i18n";
import router from "./plugins/router";
import store from "./plugins/store";

import "./styles/main.scss";

createApp(App).use(quasar).use(i18n).use(router).use(store).mount("#app");
