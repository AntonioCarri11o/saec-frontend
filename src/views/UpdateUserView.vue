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

      <n-form
        ref="formRef"
        :model="formValue"
        :rules="rules"
        label-placement="top">

        <n-form-item label="Rol*">
          <n-select v-model:value="formValue.roles" placeholder="Selecciona rol" :options="optionsRol" :key="formValue.roles" />
        </n-form-item>

        <n-grid :cols="2" :x-gap="24" responsive="screen">
          <n-form-item-gi path="rol" label="Nombre(s)*">
            <n-input v-model:value="formValue.nombre" placeholder="Ingrese nombre(s)"/>
          </n-form-item-gi>
          <n-form-item-gi path="lastname" label="Apellidos*">
            <n-input v-model:value="formValue.apellidos" placeholder="Ingrese apellidos"/>
          </n-form-item-gi>
        </n-grid>

        <n-grid :cols="2" :x-gap="24" responsive="screen">
          <n-form-item-gi path="department" label="Departamentos">
            <n-select v-model:value="formValue.departamento" placeholder="Seleccionar departamento" :options="optionsDepartment"/>
          </n-form-item-gi>
          <n-form-item-gi path="job" label="Puesto">
            <n-select v-model:value="formValue.puesto" placeholder="Seleccionar puesto" :options="optionsJob"/>
          </n-form-item-gi>
        </n-grid>

        <n-grid :cols="2" :x-gap="24" responsive="screen">
          <n-form-item-gi path="codeEmployee" label="Código de empleado">
            <n-input disabled v-model:value="formValue.codigoUsuario" placeholder="Ingrese código de empleado"/>
          </n-form-item-gi>
          <n-form-item-gi path="email" label="Correo electrónico">
            <n-input v-model:value="formValue.email" placeholder="Ingrese correo electrónico"/>
          </n-form-item-gi>
        </n-grid>

        <n-grid :cols="2" :x-gap="24" responsive="screen">
          <n-form-item-gi path="codeEmployee" label="Foto de perfil">
            <n-upload @change="(file) => formValue.fotoPerfil = file.file">
  <n-upload-dragger>
    <n-text>Arrastra tu imagen aquí o haz clic</n-text>
    <n-p depth="3">Máximo 5 MB</n-p>
  </n-upload-dragger>
</n-upload>

          </n-form-item-gi>
          <n-form-item-gi path="sign" label="Firma del empleado">
            <n-upload @change="(file) => formValue.fotoPerfil = file.file">
  <n-upload-dragger>
    <n-text>Arrastra tu imagen aquí o haz clic</n-text>
    <n-p depth="3">Máximo 5 MB</n-p>
  </n-upload-dragger>
</n-upload>

          </n-form-item-gi>
        </n-grid>
        <n-form-item>
          <n-button @click="handleValidateClick">
            Actualizar empleado
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref(null);
    
    // Datos del formulario
     const formValue = ref({
      roles: null, // Corregido: antes era `rol`
      nombre: "",
      apellidos: "",
      departamento: "",
      puesto: "",
      codigoUsuario: "",
      email: "", // Corregido: antes era `correo`
      telefono: "",
      firmaEmpleado: null,
      fotoPerfil: null,
    });
    return {
      formRef,
      optionsRol:[
        {
          label:"Valor 1",
          value:"valor1"
        },
        {
          label:"Valor 2",
          value:"valor2"
        }
      ],
      optionsDepartment:[
        {
          label:"Valor 1",
          value:"valor1"
        },
        {
          label:"Valor 2",
          value:"valor2"
        }
      ],
      optionsJob:[
        {
          label:"Valor 1",
          value:"valor1"
        },
        {
          label:"Valor 2",
          value:"valor2"
        }
      ],
      formValue:ref({
        name:"",
        apellidos:"",
        departamento:"",
        puesto:"",
        codigoUsuario:"",
        email:"",
        fotoPerfil:null,
        firmaEmpleado:null
      }),
      rules:{
        name:{
          required:true,
          trigger:"blur"
        }
      },
      handleValidateClick(e){
        e.preventDefault();
        formRef.value?.validate((errors)=>{
          if(!errors){
            console.log("Sin errores", JSON.stringify (formValue.value));
          }else{
            console.log(errors);
            
          }
        })
      }
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
