import axios from "axios";
import $auth_api from "./auth_index";
import { AUTH_API_URL } from "./auth_index";

export const API_URL = "http://localhost:5098/api"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
        try {   
            const response = await $auth_api.post(`${AUTH_API_URL}/Refresh`);
            localStorage.setItem('token', response.data.accessToken); 
            return $api.request(originalRequest);
        } catch (e) {
            console.log(e);
        }
    }
})

export default $api;