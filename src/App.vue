<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default { 
    name: 'App'
  };
</script>

<style>
html, body, #app {
  height: 100vh;
  width: 100%;
}
body {
  font-family: 'Inter', sans-serif;
}
</style>