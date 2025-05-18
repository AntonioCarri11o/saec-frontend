<template>
        <n-layout has-sider class="n-layout-container">
          <n-layout-sider
          collapse-mode="width"
          :collapsed="isSideBarCollapsed"
          :collapsed-width="68"
          :width="sideBarWidth"
          >
          <n-space justify="space-between">
            <n-image v-if="!isSideBarCollapsed"
            :src="logo" width="75"
            preview-disabled
            />
              <n-button v-if="!['xshort', 'short', 'medium'].includes(category)" quaternary @click="isSideBarManuallyCollapsed = !isSideBarManuallyCollapsed" class="collapse-bar-button" :theme-overrides="buttonThemeOverrides">
                <n-icon size="24">
                  <MenuSharp/>
                </n-icon>            
              </n-button>                                      
          </n-space>
          <n-space vertical class="menu-container">
            <AdminSideBar :currentModule="currentPathModule"/>
          </n-space>
          
          </n-layout-sider>
          <n-layout class="n-layout-container">
            <n-layout-header>
              <NavigationBreadcrumb/>
            </n-layout-header>
            <n-layout-content class="n-layout-body">
              <router-view/>
            </n-layout-content>
          </n-layout>          
        </n-layout>
</template>

<script setup>
import { MenuSharp } from '@vicons/ionicons5';
import { ref, defineOptions, computed } from 'vue';
import AdminSideBar from '@/components/admin/SideBar.vue';
import { useRoute } from 'vue-router';
import { useScreenCategory } from '@/compose/useScreenCategory.js';
import NavigationBreadcrumb from '@/components/shared/Breadcrumb.vue';

const getPathCurrentModule = (route) => {
  const sections = route.split('/');
  return sections.slice(1, sections.length)[1];
}


defineOptions({
  name: 'AdminLayout'
});

const route = useRoute();
const buttonThemeOverrides = {
  colorQuaternary: '#fffff',
  colorQuaternaryHover: '#0d5a79',
  textColor: '#ffffff'
};

const logo = ref(require('@/assets/IPMlogo.png'));
const isSideBarManuallyCollapsed = ref(false);
const currentPathModule = computed(() =>  getPathCurrentModule(route.path));
const { category } = useScreenCategory();

const isSideBarCollapsed = computed(() => {
  return ['xshort', 'short', 'medium'].includes(category.value) ? true : isSideBarManuallyCollapsed.value;
});
const sideBarWidth = computed(() => {
   return {
    'xshort': 68,
    'short': 68,
    'medium': 120,
    'large': 180,
    'xlarge': 220
  }[category.value];
});


</script>

<style scoped>
.n-layout-container {
  height: 100%;
  width: 100%;
}

.n-layout-body {
  padding: 24px;
}
.n-layout-sider {
  padding: 8px;
  background-color: #0d5a79;
}

.menu-container {
  padding: 24px 0 24px 0;
}

</style>