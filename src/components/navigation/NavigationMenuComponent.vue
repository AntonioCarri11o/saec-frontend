<template>
    <n-layout style="height:100%;">
        <n-layout-header>
            <n-image width="100" :src="logoPng" preview-disabled></n-image>

        </n-layout-header>
        <n-layout-content>
            <n-menu
                :options="menuOptions"
                :theme-overrides="menuThemeOverrides"
                :default-value="currentActiveMenuItem"
            />            
        </n-layout-content>
    </n-layout>
    
</template>
<script>
import {
    Grid as GridIcon,
    School as SchoolIcon
} from "@vicons/ionicons5";
import { NIcon } from "naive-ui";
import { defineComponent, ref, h } from "vue";
import { useRoute } from "vue-router";
function renderIcon(icon) {
    return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
    {
    label: () => h(
      "a",
      {
        href: "/admin/home",
        target: "_self",
      },
      "Panel general"
    ),
    key: "home",
    icon: renderIcon(GridIcon)
  },
  {
    label: () => h(
      "a",
      {
        href: "/admin/course",
        target: "_self",
      },
      "Cursos"
    ),
    key: "course",
    icon: renderIcon(SchoolIcon)
  },
];


export default defineComponent({
    name: 'NavigationMenu',
    setup() {
        const logoPng = ref(require("@/assets/IPMlogo.png"));
        const menuThemeOverrides = {
            itemTextColor: '#ffffff',
            itemIconColor: '#ffffff',
            itemColorHover: '#187dac',
            itemTextColorHover: '#ffffff',
            itemIconColorHover: '#ffffff',
            itemTextColorActive: '#ffffff',
            itemIconColorActive: '#ffffff',
            itemColorActive: '#1391c4',
            itemColorActiveHover: '#1391c4',
            itemTextColorActiveHover: '#ffffff',
            itemIconColorActiveHover: '#ffffff',
        };
        const route = useRoute();
        const currentActiveMenuItem = route.path.split('/')[2];
        console.log(currentActiveMenuItem);
        
        return {
            menuOptions,
            logoPng,
            menuThemeOverrides,
            currentActiveMenuItem,
        }
    }
})
</script>
<style scoped>
.n-layout, .n-layout-header {
    background: none;
}
</style>