import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import VueGtag from "vue-gtag-next"

createApp(App)
  .use(router)
  .use(VueGtag, {
    property: {
      id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
      router
    }
  })
  .mount("#app")
