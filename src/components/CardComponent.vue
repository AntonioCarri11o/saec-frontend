<template>
  <div class="container-card" :style="{ backgroundColor: bgColor }">
    <!-- Cabecera dividida en dos mitades -->
    <div class="header-card">
      <div class="header-left">
        <h3>Nombre del curso</h3>
      </div>
      <div class="header-right">
        <h4>Porcentaje obtenido</h4>
      </div>
    </div>

    <!-- Cuerpo de la tarjeta -->
    <div class="body-card">
      <div class="left-content">
        <p>{{ course }}</p>
      </div>
      <div class="right-content">
        <h2>{{ extra }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: String,
    extra: String,
    bgColor: { type: String, default: "#0D5A79" },
  },
};
</script>

<style>
/* Contenedor general */
.container-card {
  color: aliceblue;
  border-radius: 8px;
  margin: 10px;
}

/* Cabecera con dos mitades */
.header-card {
  display: flex;
  justify-content: space-around;
}

.header-left,
.header-right {
  width: 50%;
}

.header-left {
  flex: 1;
  /* margin-left: 5%; */
}
.header-right {
  flex: 1;
}

/* Cuerpo de la tarjeta */
.body-card {
  display: flex;
  justify-content: space-between;
}

/* Contenido izquierdo (alineación normal) */
.left-content {
  flex: 2;
}

.right-content {
  flex: 1;
  justify-content: center;
}
</style>
