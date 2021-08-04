import Vue from "vue";
import VueI18n from "vue-i18n";
import CompositionApi from "@vue/composition-api";
import SuiCore from "@siteminder/sui-core";
import "@siteminder/sui-core/sui-core.esm.css";
import SuiIcons from "@siteminder/sui-icons";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(CompositionApi);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
});

Vue.config.productionTip = false;

Vue.use(SuiCore, { i18n });
Vue.use(SuiIcons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
