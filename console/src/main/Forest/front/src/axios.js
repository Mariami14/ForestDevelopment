import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // if (error.response.status === 401) {
        //   // TODO
        // }
        return Promise.reject(error);
    }
);

export default axiosInstance