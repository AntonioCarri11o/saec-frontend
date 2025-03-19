import AdminLayout from "@/components/admin/AdminLayout.vue";
import AdminDashboardView from "@/views/admin/AdminDashboardView.vue";

export default [
  {
    path: "/admin",
    component: AdminLayout,
    children: [{ path: "", component: AdminDashboardView }],
    meta: { requiresAuth: true, roles: ['ROLE_ADMIN']}
  },
];
