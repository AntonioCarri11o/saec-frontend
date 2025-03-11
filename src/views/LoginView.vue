<template>
    <div class="container">
      <div class="content-container">
        <div class="logo">
          <picture>
            <source :srcset="logoWebp" type="image/webp" />
            <img :src="logoPng" alt="IPM Logo" />
          </picture>
        </div>
        <div class="form-container">
          <h1 class="title">Inicio de Sesión</h1>
          <LoginForm
            :form="form"
            :rules="rules"
            @update:form="updateForm"
            @submit="handleSubmit"
          />
          <div class="recover-password">
            <p>¿Olvidaste tu contraseña?</p>
            <n-button text color="#0D5A79" @click="toggleModal">
              Solicitar Cambio de contraseña
            </n-button>
          </div>
        </div>
      </div>
      <div class="image-container" />
    </div>
    <RecoverPasswordModal
      :showModal="showModal"
      @update:showModal="updateShowModal"
      @requestPasswordChange="handleRequestPasswordChange"
    />
</template>

<script>
import { ref } from "vue";
import { NButton } from "naive-ui";
import LoginForm from "@/components/LoginForm.vue";
import RecoverPasswordModal from "@/components/RecoveryPasswordModal.vue";

export default {
  components: {
    NButton,
    LoginForm,
    RecoverPasswordModal,
  },
  setup() {
    const logoPng = ref(require("@/assets/IPMlogo.png"));
    const logoWebp = ref(require("@/assets/IPMlogo.webp"));
    const showModal = ref(false);
    const form = ref({
      username: "",
      password: "",
    });
    const rules = ref({
      username: [
        { required: true, message: "Campo requerido", trigger: "blur" },
      ],
      password: [
        { required: true, message: "Campo requerido", trigger: "blur" },
      ],
    });

    const updateForm = (newForm) => {
      form.value = { ...newForm };
    };

    const handleSubmit = (formData) => {
      console.log("Inicio de sesión exitoso");
      console.log(
        `Username: ${formData.username}, Password: ${formData.password}`
      );
    };

    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    const updateShowModal = (newValue) => {
      showModal.value = newValue;
    };

    const handleRequestPasswordChange = (username, message) => {
      console.log(`Solicitud de cambio de contraseña para: ${username}`);
      message.success(
        "Se ha solicitado tu cambio de contraseña, espera a que tu administrador resuelva la problemática"
      );
    };

    return {
      logoPng,
      logoWebp,
      form,
      rules,
      updateForm,
      handleSubmit,
      showModal,
      toggleModal,
      updateShowModal,
      handleRequestPasswordChange,
    };
  },
};
</script>

<style scoped>
@import "@/styles/login.css";
</style>
