import GeneralPanel from "@/views/teacher/GeneralPanel.vue";
import TeacherLayout from "@/views/teacher/TeacherLayout.vue";

export default [
  {
    path: "/teacher",
    component: TeacherLayout,
    children: [{ path: "", component: GeneralPanel }],
    meta: { requiresAuth: true, roles: ['ROLE_TEACHER']}
  },
];
