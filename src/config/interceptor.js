import axios from "axios";
import notification from "@/plugins/notification";

const api = axios.create({});
api.interceptors.response.use(response => {
    if (response.status == 201) {
        notification.success({
            title: `Éxito ${response.status}`,
            content: "Operación realizada con éxito!"
        });
    }
    if (response.error) {
        notification.error({
            title: `Algo salió mal! ${response.status}`,
            content: response.message
        });
    }
    return response.data;
},
error => {
    notification.error({
        title: 'Algo salió mal',
        content: 'Ha ocurrido un error inesperado en el servidor'
    });
    return error;
});

export default api;