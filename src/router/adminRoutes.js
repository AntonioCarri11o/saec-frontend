import AdminLayout from "@/views/Admin/AdminLayout.vue";
import CourseListView from "@/views/Admin/CourseListView.vue";
import EmployeeListView from "@/views/Admin/EmployeeListView.vue";
import DepartmentListView from "@/views/Admin/DepartmentListView.vue";

export default [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "course", component: CourseListView, label: 'Curso'
      },
      {
        path: "employee", component: EmployeeListView, label: 'Empleado'
      },
      {
        path: "department", component: DepartmentListView, label: 'Department'
      }
    ],
    meta: { requiresAuth: true, roles: ['ROLE_ADMIN']}
  },
];
