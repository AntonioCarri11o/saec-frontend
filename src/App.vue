<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <UpdateUserView/>
  </n-config-provider>
</template>

<script>
import themeOverrides from "@/assets/naive-ui-theme-overrides.json";
import UpdateUserView from './views/UpdateUserView.vue';
export default {
  name: 'App',
  components: {
    UpdateUserView,
  },
  data(){
    return{
      themeOverrides
    };
  }
}
</script>

<style>
</style>
