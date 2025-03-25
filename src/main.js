import { createApp } from 'vue'
import App from '@/App.vue';
import { router } from "@/router/main.js";
import { NConfigProvider, NGlobalStyle } from "naive-ui";
import naive from "naive-ui"

const app = createApp(App);
app.component("n-config-provider", NConfigProvider);
app.component("n-global-style", NGlobalStyle);
app.use(naive);
app.use(router);
app.mount('#app');