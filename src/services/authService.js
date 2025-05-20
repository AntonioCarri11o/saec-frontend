const API_BASE = process.env.VUE_APP_API_URL;
import api from "@/config/interceptor";

export const loginService = (username, password) => {
    return api.post(`${API_BASE}/auth/login`, { username, password }, { headers: {'Content-Type': 'application/json'} })
    .then(response => {
        localStorage.setItem('t', response.data);
    })
    .catch(error => {
        throw error;
    });
}

export const logoutService = () => {
    localStorage.removeItem('t');
}