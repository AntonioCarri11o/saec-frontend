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
        path: "course", component: CourseListView, label: 'Cursos'
      },
      {
        path: "employee", component: EmployeeListView, label: 'Empleados'
      },
      {
        path: "department", component: DepartmentListView, label: 'Departmentos'
      }
    ],
    meta: { requiresAuth: true, roles: ['ROLE_ADMIN']}
  },
];
