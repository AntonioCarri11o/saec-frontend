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
        <p>Editar Empleado</p>
      </div>
    </div>

    <!-- Cuerpo -->
    <div class="container">
      <n-form ref="formRef" :model="formValue" :rules="rules" label-placement="top">
        <n-form-item path="rol" label="Rol">
          <n-select
            v-model:value="formValue.roles"
            placeholder="Selecciona rol"
            :options="optionsRol"
          />
        </n-form-item>

        <div class="grid-container">
          <n-form-item path="nombre" label="Nombre(s)">
            <n-input v-model:value="formValue.nombre" placeholder="Ingrese nombre(s)" />
          </n-form-item>
          <n-form-item path="apellidos" label="Apellidos">
            <n-input v-model:value="formValue.apellidos" placeholder="Ingrese apellidos" />
          </n-form-item>
        </div>

        <div class="grid-container">
          <n-form-item path="departamentos" label="Departamentos">
            <n-select
              v-model:value="formValue.departamento"
              placeholder="Seleccionar departamento"
              :options="optionsDepartment"
            />
          </n-form-item>
          <n-form-item path="job" label="Puesto">
            <n-select
              v-model:value="formValue.puesto"
              placeholder="Seleccionar puesto"
              :options="optionsJob"
            />
          </n-form-item>
        </div>

        <div class="grid-container">
          <n-form-item path="codeEmployee" label="Código de empleado">
            <n-input disabled v-model:value="formValue.codigoUsuario" />
          </n-form-item>
          <n-form-item path="email" label="Correo electrónico">
            <n-input v-model:value="formValue.email" placeholder="Ingrese correo electrónico" />
          </n-form-item>
        </div>

        <n-form-item path="sign" label="Firma del empleado">
          <n-upload accept=".jpg,.jpeg,.png" @change="(file) => (formValue.firmaEmpleado = file.file)">
            <n-upload-dragger>
              <n-text>Arrastra tu imagen aquí, o <n-text style="color:#1d8ec6;">haz clic para seleccionar</n-text></n-text>
              <n-p depth="3">Máximo 5 MB</n-p>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item style="display:flex; justify-content: center;">
          <n-button type="primary" style="border-radius:10px;" @click="handleValidateClick">Actualizar empleado</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const rules = {
      nombre: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error("Nombre es obligatorio");
            // } else if (!/^\d*$/.test(value)) {
            //   return new Error("Age should be an integer");
            } else if (value.length < 3) {
              return new Error("El nombre debe tener al menos 3 caracteres.");
            }
            return true;
          },
          trigger: ["input", "blur"]
        }
      ],
      rol: [
        {
          required: true,
          validator(rule,value){
            if(!value){
              return new Error("Rol es obligatorio");
            }
            return true;
          },
          trigger: ["input", "blur"]
        }
      ],
      apellidos: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error("Apellidos es obligatorio");
            } else if (value.length < 3) {
              return new Error("El nombre debe tener al menos 3 caracteres.");
            }
            return true;
          },
          trigger: ["input", "blur"]
        }
      ],
      departamentos: [
        {
          required: true,
          validator(rule,value){
            if(!value){
              return new Error("Rol es obligatorio");
            }
            return true;
          },
          trigger: ["input", "blur"]
        }
      ]
    };
    const formRef = ref(null);
    const formValue = ref({
      roles: null,
      nombre: "Joana Andrea",
      apellidos: "Quintero Martinez",
      departamento: "Almacen",
      puesto: "Acomodador",
      codigoUsuario: "23413",
      email: "ejemplo@gmail.com",
      firmaEmpleado: null,
    });

    return {
      formRef,
      optionsRol: [
        { label: "Administrador", value: "valor1" },
        { label: "Empleado", value: "valor2" },
      ],
      optionsDepartment: [
        { label: "Laboratorio", value: "valor1" },
        { label: "Almacen", value: "valor2" },
      ],
      optionsJob: [
        { label: "Almacenista", value: "valor1" },
        { label: "Acomodador", value: "valor2" },
      ],
      formValue,
      rules,
      handleValidateClick(e) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            console.log("Sin errores", JSON.stringify(formValue.value));
          } else {
            console.log(errors);
          }
        });
      },
    };
  },
});
</script>

<style>
.header {
  padding: 12px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: auto;
}

.header p {
  margin: 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}


.container {
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
