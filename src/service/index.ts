import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api-staging.adoptapet.com/',
    headers: {
        'Content-Type': 'application/json',
        // Add other headers if needed
    },
});

axiosInstance.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        key: 'hg4nsv85lppeoqqixy3tnlt3k8lj6o0c', // API key
        v: '3', // Version
        output: 'json', // Output type
    };
    return config;
});

export default axiosInstance;
