import AdminLayout from "@/components/admin/AdminLayout.vue";
import AdminDashboardView from "@/views/admin/AdminDashboardView.vue";
import CoursesView from "@/views/admin/CoursesView.vue";
import EmployeesView from "@/views/admin/EmployeesView.vue";

export default [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", component: AdminDashboardView, name: "dashboard" },
      { path: "courses", component: CoursesView, name: "course"},
      { path: "employees", component: EmployeesView, name: "employees"}
    ],
    meta: { requiresAuth: true, roles: ['ROLE_ADMIN']}
  },
];
