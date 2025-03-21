import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import AreaListView from "@/views/AreaListView.vue";
import "@/styles/fonts.css";

const routes = [
    { path: "/", component: LoginView },
    { path: "/AreaList", component: AreaListView },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});