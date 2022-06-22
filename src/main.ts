import Vue from "vue"
import VueI18n from "vue-i18n"
import VueCompositionApi from "@vue/composition-api"
import SuiCore from "@siteminder/sui-core"
// import SuiHeader from "@siteminder/sui-header"
import SuiIcons from "@siteminder/sui-icons"
// import SuiSidebar from "@siteminder/sui-sidebar"

// Theme
// import "@siteminder/sui-themes/sui-theme.esm.css"
// import "./styles/theming-test.css";

// Global styles
import "@siteminder/sui-core/sui-core.esm.css"
// import '@siteminder/sui-header/sui-header.esm.css'
// import '@siteminder/sui-sidebar/sui-sidebar.esm.css'

import './styles/tailwind.scss'
import './styles/global.scss'


import App from "./app.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"

Vue.use(VueCompositionApi)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: "en",
})

Vue.config.productionTip = false

Vue.use(SuiIcons)
Vue.use(SuiCore, { i18n })
// Vue.use(SuiHeader, { i18n })
// Vue.use(SuiSidebar, { i18n })

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app")
