import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Appsignal from "@appsignal/javascript";
import { errorHandler } from "@appsignal/vue";
import { plugin } from "@appsignal/plugin-window-events"

const appsignal = new Appsignal({
  key: "4c499a2b-ee1f-4e06-82d6-fb4267f9a214",
});
appsignal.use(plugin())

const app = createApp(App).use(router).mount('#app')

app.config = {
  errorHandler: errorHandler(appsignal),
};


