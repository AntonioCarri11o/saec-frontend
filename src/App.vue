<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view/>    
  </n-config-provider>
</template>

<script>
  export default { 
    name: 'App'
  };
</script>

<style>
  body {
    font-family: 'Inter', sans-serif;
  }
</style>