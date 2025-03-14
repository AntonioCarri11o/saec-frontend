<!--  Falta hacer la estructura del consumo de api y que se muestren los datos / sin datos / error de get -->
<template>
  <div>
    <div class="header">
      <div>
        <n-breadcrumb>
          <n-breadcrumb-item>Panel General</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <div>
        <h1>Panel General</h1>
      </div>
    </div>

    <!-- CUERPO -->
    <div class="container">
      <!-- SECCIÓN DE CARDS -->
      <div>
        <n-grid x-gap="80" :cols="3">
          <n-gi>
            <n-card style="border-color:#0D5A79;border:2px;border-style:solid;border-radius: 10px;" size="small" title="Cursos Tomados"> 000 </n-card>
          </n-gi>
          <n-gi>
            <n-card style="border-color:#0D5A79;border:2px;border-style:solid;border-radius: 10px;" size="small" title="Cursos Pendientes"> 000 </n-card>
          </n-gi>
          <n-gi>
            <n-card style="border-color:#0D5A79;border:2px;border-style:solid;border-radius: 10px;" size="small" title="Cursos Faltantes"> 000 </n-card>
          </n-gi>
        </n-grid>
      </div>

      <!-- SECCIÓN DE GRAFICA Y LISTAS -->
      <div class="container-body">
        <div class="leftside">
          <n-space vertical>
            <n-layout style="border:2px;border-style: solid; border-color: #0D5A79; border-radius: 10px;">
              <h3>Capacitaciones asignadas del mes</h3>
              <div class="chart-container">
                <DoughnutChart :chartData="testData" :options="options"/>
              </div>
            </n-layout>
            <n-layout style="border:2px;border-style: solid; border-color: #0D5A79; border-radius: 10px;">
              <h2>Examenes realizados del mes</h2>
              <div v-if="loading">Cargando...</div>
              <div v-else-if="error">Sin datos</div>
              <div v-else>
                <n-infinite-scroll style="height: 240px" :distance="10" @load="handleLoad">
                  <CardComponent v-for="curso in cursosR" :key="curso.id" :course="curso.curso" :extra="curso.extra"/>
                </n-infinite-scroll>
              </div>
            </n-layout>
          </n-space>
        </div>
        <div class="rightside">
          <n-layout style="border:2px;border-style: solid; border-color: #0D5A79; border-radius: 10px;">
              <h3>Examenes asignados</h3>
              <n-infinite-scroll style="height: 95vh" :distance="10" @load="handleLoad">
                <CardComponent bgColor="green"/>
                <CardComponent bgColor="green"/>
              </n-infinite-scroll>
            </n-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent,ref,onMounted} from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import CardComponent from '../components/CardComponent.vue'

Chart.register(...registerables);

export default defineComponent({
  name: 'DashboardEmployeeView',
  components: { DoughnutChart,CardComponent },
  setup() {
    const cursosR = ref([]); //para cursos realizados del mes
    const cursosA = ref([]); // para cursos asignados del mes
    const loading = ref(true);
    const error = ref(false);
    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        }
    });
    const testData = {
      labels: ['Asignados', 'Completados', 'Pendientes', 'No asitidos'],
      datasets: [
        {
          data: [5, 2, 1, 1],
          backgroundColor: ['#229DDC', '#18A058', '#F0A020', '#D03050',],
        },
      ],
    };

    onMounted(() => {
      console.log("Aqui ira el consumo de la api");
    });

    return { testData ,options, cursosR,cursosA,loading,error};
  },
});
</script>

<style>

.header {
  padding: 0px 30px 0px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.container {
  margin: 20px;
}

.container-body {
  padding-top: 25px;
  display: flex;
  width: 100%;
}

.chart-container{
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  margin-right: 5%;
}

.leftside, .rightside {
  flex: 1;
  padding: 20px;
}

@media (max-width: 768px) {
  .container-body {
    flex-direction: column;
    height: auto;
  }

  .leftside, .rightside {
    width: 100%;
    height: 50vh;
  }
}
</style>
