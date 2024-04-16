import axios from "axios"

export const AUTH_API_URL = 'http://localhost:5201/api/Authentication'

const $auth_api = axios.create({
    withCredentials: true,
    baseURL: AUTH_API_URL
})

$auth_api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $auth_api;