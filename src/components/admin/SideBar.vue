<template>
    <n-space>
            <n-menu
    :theme-overrides="menuOptionThemeOverrides"
    :options="menuOptions"
    collapse-mode="width"
    :collapse-width="68"
    :width="240"
    :value="currentModule"
    :collapsed="collapsed"
    />        
    </n-space>
    
</template>
<script>
import { defineComponent, h } from "vue";
import { NIcon } from 'naive-ui';
import { School } from '@vicons/ionicons5';
import { GroupsFilled, BusinessSharp } from '@vicons/material';
import { RouterLink } from 'vue-router';

const renderMenuIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon)});
}
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