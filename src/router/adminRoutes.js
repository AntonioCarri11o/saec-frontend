import AdminLayout from "@/components/admin/AdminLayout.vue";
import AdminDashboardView from "@/views/admin/AdminDashboardView.vue";
import UpdateUserView from "@/views/admin/UpdateUserView.vue";

export default [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        component: AdminDashboardView,
      },
      {
        path: "empleados",
        component: AdminDashboardView,
      },
      {
        path: "empleados/actualizarempleado",
        component: UpdateUserView,
      },
    ],
    meta: { requiresAuth: true, roles: ["ROLE_ADMIN"] },
  },
];
