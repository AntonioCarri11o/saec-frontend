import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import './styles/fonts.css';
import router from './router/index.js';

const app = createApp(App);
app.use(naive);
app.use(router);
app.mount("#app");