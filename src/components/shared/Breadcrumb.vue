<template>
    <n-space class="breadcrumbContainer" vertical justify="center">
        <n-space justify="space-between">
            <n-breadcrumb separator=">">
<n-breadcrumb-item v-for="item in breadcrumbs" :key="item.to">
      <n-button
        quaternary
        @click="navigate(item.to)"
        size="large"
        :theme-overrides="buttonThemeOverrides"
      >
        {{ item.label }}
      </n-button>
    </n-breadcrumb-item>
            </n-breadcrumb>
            <h1 class="page-header">{{breadcrumbs[0].label}}</h1>
        </n-space>
        
    </n-space>
    
</template>

<script>
import { defineComponent } from 'vue';
import flattenRoutes from '@/compose/useFlattenRoutes.js';
import adminRoutes from '@/router/adminRoutes';
import useBreadcrumbs from '@/compose/useBreadCrumbs.js';
import { useRouter } from 'vue-router';
export default defineComponent ({
    name: 'NavigationBreadcrumb',
    setup(){
        const routeMap = flattenRoutes(adminRoutes);
        const { breadcrumbs } = useBreadcrumbs(routeMap);
        const router = useRouter();
        const navigate = (to) => {
            router.push(to)
        }
        const buttonThemeOverrides = {
            colorQuaternaryHover: '#c7d3da',
            textColor: '#0d5a79'
        };
        return {
            breadcrumbs,
            navigate,
            buttonThemeOverrides
        }
    },
});
</script>

<style scoped>
.breadcrumbContainer {
    padding: 24px;
    height: 105px;
}

.breadcrumb-item {
    font-size: 16px;
    font-weight: bolder;
    margin: 0;
    padding: 0;
    cursor: pointer;
}

.page-header {
    color: #0d5a79;
}
</style>