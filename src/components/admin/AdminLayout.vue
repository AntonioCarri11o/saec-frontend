<template>
  <div class="layout">
    <AdminSidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import AdminSidebar from "@/components/admin/AdminSidebar.vue";

export default {
  components: {
    AdminSidebar
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

main {
  padding: 2.5rem 6rem 6rem 2.5rem;
}
</style>