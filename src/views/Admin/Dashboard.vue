<template>
      <n-layout has-sider horizontal>
        <n-layout-sider content-style="padding: 24px;">
          <n-flex vertical>
            <NavigationMenuComponentVue/>
            <n-divider/>
            <n-button block quaternary :theme-overrides="buttonThemeOverrides" size="large">
                <template #icon>
                    <n-icon size="30">
                        <ExitIcon/>
                    </n-icon>
                </template>
                Cerrar sesión
              </n-button>    
          </n-flex>
        </n-layout-sider>
        <n-layout>
          <n-layout-header>
            <div class="header-container">
                <n-flex size="large" justify="space-between" align="center">
                    <n-breadcrumb>
                        <n-breadcrumb-item v-for="item in breadCrumbItems" :key="item.name" separator=">">
                            <n-button quaternary type="info" size="medium">
                                <RouterLink :to="`/admin${item.path}`">{{item.label}}</RouterLink>
                            </n-button>                            
                          </n-breadcrumb-item>
                    </n-breadcrumb>
                    
                    <h1>{{currentView.label}}</h1>
                </n-flex>            
            </div>
          </n-layout-header>
          <n-layout-content content-style="padding: 24px;">
            <router-view/>
          </n-layout-content>
        </n-layout>
      </n-layout>
  </template>
<script>
const views = [
    {
        name: 'home',
        label: 'Panel General',
        path: '/home'
    },
    {
        name: 'course',
        label: 'Cursos',
        path: '/course',
    },
    {
        name: 'exam',
        label: 'Curso',
        subtitle: '',
        path: '/course/exam',
    },
    {
        name: 'new',
        label: 'Nuevo Curso',
        path: '/course/exam/new'
    }
];
function getCurrentViewInfo(path) {
    const pathSegments = path.split("/");
    let breadCrumbItems = [];
    pathSegments.forEach((segment) => {
        views.find((view) => {if(view.name === segment){breadCrumbItems.push(view)}})
    });
    return {
        currentView: views.find(item => item.name === pathSegments[pathSegments.length - 1]),
        breadCrumbItems: breadCrumbItems,
    };
}

import NavigationMenuComponentVue from '@/components/navigation/NavigationMenuComponent.vue'
import { Exit as ExitIcon } from '@vicons/ionicons5';
import { useRoute, useRouter } from 'vue-router';
export default {
    name: 'AdminDasboard',
    components: {
        NavigationMenuComponentVue,
        ExitIcon,
    },
    setup() {
     const route = useRoute();
     const router = useRouter();
     const {currentView, breadCrumbItems} = getCurrentViewInfo(route.path);
     const navigate = (path) => {
        router.replace(path);
     };
        const buttonThemeOverrides = {
            colorQuaternaryHover: '#187dac',
            colorQuaternaryPressed: '#1391c4',
            textColor: '#ffffff',
        };
        console.log(breadCrumbItems);
        return {
            NavigationMenuComponentVue,
            buttonThemeOverrides,
            currentView,
            breadCrumbItems,
            navigate,
        };
    }
};
</script>
<style scoped>
.n-layout:has(.n-layout-sider), .n-layout-sider, .n-flex {
    height: 100%;
}
.n-divider {
    margin-top: 100%;
}

.n-layout-sider {
    background-color: #0d5a79;
}
.n-button {
    display: flex;
    justify-content: space-around;
}

.header-container {
    width: 100%;
    height: 140px;
    padding: 20px;
}
h1 {
    color: #0d5a79
}
</style>
