import AdminLayout from "@/components/admin/AdminLayout.vue";
import AdminDashboardView from "@/views/admin/AdminDashboardView.vue";
import AreaListView from "@/views/admin/AreaListView.vue";

export default [
  {
    path: "/admin",
    component: AdminLayout,
    children: [{ path: "", component: AdminDashboardView }],
    meta: { requiresAuth: true, roles: ['ROLE_ADMIN']}
  },
  {
    path: "/admin/departments",
    component: AreaListView,
    meta:{requiresAuth:true,roles:['ROLE_ADMIN']}
  }
];
