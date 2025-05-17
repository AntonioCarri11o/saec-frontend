<template>
        <n-layout has-sider class="n-layout-container">
          <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed="isSideBarCollapsed"
          :collapsed-width="68"
          :width="240"
          >
          <n-space justify="space-between">
            <n-image v-if="!isSideBarCollapsed"
            :src="logo" width="75"
            preview-disabled
            />
              <n-button quaternary @click="isSideBarCollapsed = !isSideBarCollapsed" class="collapse-bar-button" :theme-overrides="buttonThemeOverrides">
                <n-icon size="24">
                  <MenuSharp/>
                </n-icon>            
              </n-button>                                      
          </n-space>
          <n-space vertical class="menu-container">
            <AdminSideBar v-model:collapsed="isSideBarCollapsed" v-model:currentModule="pathCurrentModule"/>
          </n-space>
          
          </n-layout-sider>
          <n-layout class="n-layout-container">
            <n-layout-header>
              Header
            </n-layout-header>
            <n-layout-content>
              <router-view/>
            </n-layout-content>
          </n-layout>          
        </n-layout>
</template>

<script setup>
import { MenuSharp } from '@vicons/ionicons5';
import { ref, defineOptions } from 'vue';
import AdminSideBar from '@/components/admin/SideBar.vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'AdminLayout'
});

const buttonThemeOverrides = {
  colorQuaternary: '#fffff',
  colorQuaternaryHover: '#0d5a79',
  textColor: '#ffffff'
};
const logo = ref(require('@/assets/IPMlogo.png'));
const isSideBarCollapsed = ref(false);
const { pathCurrentModule } = ref(getCurrentModulePath());

function getCurrentModulePath() {
  const route = useRoute();
  const pathSections = route.path.split('/')
  return {
    pathSections: pathSections.slice(1, pathSections.length),
    pathCurrentModule: pathSections[2]
  }
}
</script>

<style scoped>
.n-layout-container {
  height: 100%;
  width: 100%;
}

.n-layout-sider {
  padding: 8px;
  background-color: #0d5a79;
}

.menu-container {
  padding: 24px 0 12px 0;
}

</style>