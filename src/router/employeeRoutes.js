import EmployeeLayout from "@/views/employee/EmployeeLayout.vue";
import GeneralPanel from "@/views/employee/GeneralPanel.vue";


export default [
  {
    path: "/employee",
    component: EmployeeLayout,
    children: [{ path: "", component: GeneralPanel }],
    meta: { requiresAuth: true, roles: ['ROLE_EMPLOYEE']}
  },
];
