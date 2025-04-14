import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import Dashboard from "@/views/Admin/Dashboard.vue";
import AdminHome from "@/views/Admin/AdminHome.vue";
import Course from "@/views/Admin/Course.vue";

const routes = [
    { path: "/login", component: LoginView },
    { path: "/admin",
        component: Dashboard,
        children: [
            {
                path: 'home',
                name: 'HomeAdmin',
                component: AdminHome
            },
            {
                path: 'course',
                name: 'CourseAdmin',
                component: Course,
            }
        ],
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});