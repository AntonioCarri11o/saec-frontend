<template>
    <n-space vertical class="h-100" justify="space-between">
        <n-menu
        :theme-overrides="menuOptionThemeOverrides"
        :options="menuOptions"
        collapse-mode="width"
        :collapse-width="68"
        :width="240"
        :value="currentModule"
        :collapsed="collapsed"
        />
        <div>
            <n-divider/>
                <n-menu
                :theme-overrides="menuOptionThemeOverrides"
                :options="footerOptions"
                collapse-mode="width"
                :collapse-width="68"
                :width="240"
                :collapsed="collapsed"
                />
        </div>   

        
    </n-space>
    
</template>
<script>
import { defineComponent, h } from "vue";
import { NIcon } from 'naive-ui';
import { School, LogOutOutline } from '@vicons/ionicons5';
import { GroupsFilled, BusinessSharp } from '@vicons/material';
import { RouterLink } from 'vue-router';
import { logoutService } from '@/services/authService.js'

const renderMenuIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon)});
};

const logout = () => {
    logoutService();
    window.location.reload();
};

export default defineComponent ({
    name: 'AdminSideBar',
    props: {
        'currentModule': String
    },
    setup() {
    },
    data() {     
        return {
            menuOptions : [
                {
                    label: () =>
                    h(RouterLink,
                        {
                            to:{ path: '/admin/course' }
                        },
                        { default: () => 'Cursos' }
                    ),
                    key: 'course',
                    icon: renderMenuIcon(School)
                },
                {
                    label: () =>
                    h(RouterLink,
                        {
                            to:{ path: '/admin/employee' }
                        },
                        { default: () => 'Empleados' }
                    ),
                    key: 'employee',
                    icon: renderMenuIcon(GroupsFilled)
                },
                {
                    label: () =>
                    h(RouterLink,
                        {
                            to: { path: '/admin/department' }
                        },
                        { default: () => 'Departamentos' }
                    ),
                    key: 'department',
                    icon: renderMenuIcon(BusinessSharp)
                },
            ],
            footerOptions: [
                {
                    label: () => h('span', {
                        onClick: () => {
                            logout();
                        }
                    }, 'Cerrar sesión'),
                    key: 'sign-out',
                    icon:(renderMenuIcon(LogOutOutline))
                },
                {
                    label: () => h('span', 'ADMIN'),
                    key: 'username',
                }
            ],
            menuOptionThemeOverrides : {
                itemIconColor: '#ffffff',
                itemTextColor: '#ffffff',
                itemColorHover: '#136c93',
                itemIconColorHover: '#ffffff',
                itemTextColorHover: '#ffffff',
                itemColorActive: '#1d8ec6',
                itemIconColorActive: '#ffffff',
                itemTextColorActive: '#ffffff',
                itemColorActiveHover: '#1d8ec6',
                itemIconColorActiveHover: '#ffffff',
                itemTextColorActiveHover: '#ffffff',
                itemColorActiveCollapsed: '#1d8ec6',
                itemIconColorCollapsed: '#ffffff'
            },
        }
    },
});
</script>

<style scoped>

</style>