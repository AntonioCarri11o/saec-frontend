<template>
    <n-layout has-sider>
        <n-layout-sider 
            bordered 
            collapse-mode="width" 
            :collapsed-width="64" 
            :width="244" 
            :collapsed="collapsed"
            show-trigger 
            @collapse="collapsed = true" 
            @expand="collapsed = false"
            class="sidebar"
        >
            <!-- Header (Logo) -->
            <div v-if="!collapsed" class="sidebar-header">
                <img :src="logoPng" alt="Logo" class="logo">
            </div>

            <!-- Contenedor de menús (hace que logout se empuje hacia abajo) -->
            <div class="menu-container">
                <!-- Menú principal -->
                <n-menu 
                    v-model:value="activeKey" 
                    :collapsed="collapsed" 
                    :collapsed-width="64" 
                    :collapsed-icon-size="22"
                    :options="menuOptions"
                    :theme-overrides="menuTheme"
                    @update:value="handleMenuSelect" 
                />
            </div>

            <!-- Menú de Logout (SIEMPRE ABAJO) -->
            <n-menu 
                v-model:value="activeKey"
                :collapsed="collapsed" 
                :collapsed-width="64" 
                :collapsed-icon-size="22"
                :options="logoutMenu"
                :theme-overrides="menuTheme"
                @update:value="handleMenuSelect"
                class="logout-menu"
            />
        </n-layout-sider>
    </n-layout>
</template>

<script>
import { SpaceDashboardRound, BookRound, PeopleAltRound, ApartmentRound, LogOutRound } from "@vicons/material";
import { h, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NIcon, NLayout, NLayoutSider, NMenu } from "naive-ui";

export default {
    components: {
        NLayout,
        NLayoutSider,
        NMenu,
    },
    setup() {
        // Logo corregido

        const router = useRouter();
        const route = useRoute();

        const renderIcon = (icon) => {
            return () => h(NIcon, null, { default: () => h(icon) });
        };

        const collapsed = ref(false);
        const activeKey = ref(route.name || "dashboard");

        const menuOptions = [
            { label: "Panel General", key: "dashboard", icon: renderIcon(SpaceDashboardRound) },
            { label: "Cursos", key: "courses", icon: renderIcon(BookRound) },
            { label: "Empleados", key: "employees", icon: renderIcon(PeopleAltRound) },
            { label: "Departamentos", key: "departments", icon: renderIcon(ApartmentRound) }
        ];

        const logoutMenu = [
            { label: "Cerrar Sesión", key: "logout", icon: renderIcon(LogOutRound) }
        ];

        const menuTheme = {
            itemTextColor: 'white',
            itemIconColor: 'white',
            itemTextColorActive: 'white',
            itemColorActive: '#093B52',
            itemIconColorActive: 'white',
            itemTextColorHover: 'white',
            itemColorHover: 'rgba(255, 255, 255, 0.1)',
            itemIconColorHover: 'white',
            itemColorActiveHover: '#093B52',
            itemIconColorActiveHover: 'white',
            itemTextColorActiveHover: 'white'
        };

        const handleMenuSelect = (key) => {
            switch (key) {
                case 'dashboard':
                    router.push('/admin/');
                    break;
                case 'courses':
                    router.push('/admin/courses');
                    break;
                case 'employees':
                    router.push('/admin/employees');
                    break;
                case 'departments':
                    router.push('/admin/departments');
                    break;
                case 'logout':
                    console.log("Cerrando sesión...");
                    break;
            }
        };

        return {
            logoPng,
            collapsed,
            activeKey,
            menuOptions,
            logoutMenu,
            menuTheme,
            handleMenuSelect
        };
    }
}
</script>

<style scoped>
/* Sidebar ocupa toda la altura */
.sidebar {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Ocupar toda la pantalla */
    background-color: #0D5A79;
}

/* Header del sidebar */
.sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #093B52;
}

/* Imagen del logo */
.logo {
    max-width: 80%;
    height: auto;
}

/* Contenedor de los menús */
.menu-container {
    flex-grow: 1; /* Empuja el logout hacia abajo */
    display: flex;
    flex-direction: column;
}

/* Menú de logout */
.logout-menu {
    margin-top: auto; /* Lo manda hasta el final */
}
</style>
