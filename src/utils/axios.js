import axios from 'axios';
import {appConfig} from "@/config/applicationConfiguration";

const axiosInstance = axios.create({
    baseURL: appConfig.apiUrl,
    timeout: 10000,
});

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
