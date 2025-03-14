import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import './styles/fonts.css';


const app = createApp(App);
app.use(naive);

app.mount("#app");