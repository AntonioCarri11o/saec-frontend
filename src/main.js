import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import './styles/fonts.css';
import router from '@/router/main';
import { NConfigProvider, NGlobalStyle } from "naive-ui";

const app = createApp(App);
app.component("n-config-provider", NConfigProvider);
app.component("n-global-style", NGlobalStyle);
app.use(naive);
app.use(router);
app.mount("#app");