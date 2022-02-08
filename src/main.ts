import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import * as  appsignal from "./appsignal";
// import { errorHandler }  from "@appsignal/vue";

const app = createApp(App)
// app.config.errorHandler = errorHandler(appsignal, app)
app.use(router).mount('#app')

