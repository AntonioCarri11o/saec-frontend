<template>
  <div>
    <!-- Cabecera -->
    <div class="header">
      <div>
        <n-breadcrumb>
          <n-breadcrumb-item>Empleados</n-breadcrumb-item>
          <n-breadcrumb-item>Editar datos</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <div>
        <h1>Editar Empleado</h1>
      </div>
    </div>

    <!-- Cuerpo -->
    <div class="container">
      <n-form ref="formRef" :model="model" :rules="rules" label-placement="top">
        <!-- Contenedor de los elementos del formulario -->
         <div class="form-item">
            <p>Rol*</p>
            <n-select v-model:value="model.rol" placeholder="Seleccionar rol" :options="optionsRol"/>
          </div>
        <div class="form-grid">
          
          <div class="form-item">
            <p>Nombre(s)*</p>
            <n-input v-model:value="model.nombre" placeholder="Ingrese nombre" />
          </div>
          <div class="form-item">
            <p>Apellido(s)*</p>
            <n-input v-model:value="model.apellidos" placeholder="Ingrese apellidos" />
          </div>
          <div class="form-item">
            <p>Departamento*</p>
            <n-select v-model:value="model.departamento" placeholder="Seleccionar departamento" :options="optionsDepartment"/>
          </div>
          <div class="form-item">
            <p>Puesto*</p>
            <n-select v-model:value="model.puesto" placeholder="Seleccionar puesto" :options="optionsJob"/>
          </div>
          <div class="form-item">
            <p>Código de usuario*</p>
            <n-input disabled v-model:value="model.codigoUsuario" placeholder="Ingrese código de usuario" />
          </div>
          <div class="form-item">
            <p>Correo electrónico*</p>
            <n-input v-model:value="model.correo" placeholder="Ingrese correo electrónico" />
          </div>
          <div class="form-item">
            <p>Foto de perfil</p>
            <n-upload>
              <n-upload-dragger>
                <div style="margin-bottom:12px">
                  <n-icon size="48" :depth="3">
                    <ArchiveIcon/>
                  </n-icon>
                </div>
                <n-text style="font-size:16px">
                  Arrastra tu imagen aqui, o has click para seleccionar
                </n-text>
                <n-p depth="3" style="margin: 8px 0 0 0">Maximo 5 MB</n-p>
              </n-upload-dragger>
            </n-upload>
          </div>
          <div class="form-item">
            <p>Firma del empleado*</p>
            <n-upload>
              <n-upload-dragger>
                <div style="margin-bottom:12px">
                  <n-icon size="48" :depth="3">
                    <ArchiveIcon/>
                  </n-icon>
                </div>
                <n-text style="font-size:16px">
                  Arrastra tu imagen aqui, o has click para seleccionar
                </n-text>
                <n-p depth="3" style="margin: 8px 0 0 0">Maximo 5 MB</n-p>
              </n-upload-dragger>
            </n-upload>
          </div>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const formRef = ref(null);
    
    return {
      formRef,
      model: ref({
        rol: null,
        nombre: "",
        apellidos: "",
        departamento: "",
        puesto: "",
        codigoUsuario: "",
        correo: "",
        telefono: "",
      }),
      optionsRol: ["Administrador", "Evaluador", "Empleado"].map(v => ({
        label: v,
        value: v,
      })),
      optionsDepartment: ["Departamento 1", "Departamento 2", "Departamento 3"],
      optionsJob: ["Puesto 1", "Puesto 2", "Puesto 3"],
    };
  },
});
</script>

<style>
/* Cabecera */
.header {
  margin: 20px;
  padding: 0px 30px 0px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

/* Contenedor principal */
.container {
  padding: 20px;
  margin: 20px;
}

/* Grid de formulario usando Flexbox */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas */
  gap: 20px;
}

.form-item {
  display: flex;
  flex-direction: column;
}

/* Responsive: Cambiar a una sola columna en pantallas pequeñas */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr; /* Cambia a una sola columna */
  }
}
</style>
