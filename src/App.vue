<template>
  <div class="general-container">
    <router-view/>
  </div>
  
</template>

<script>
  export default {
    name: 'App',
  };
</script>
<style>

html, body, #app{
  height: 100vh;
}
.general-container {
  height: 100%;
}
  body {
    font-family: 'Inter', sans-serif;
  }
</style>