import axios from 'axios';

export const Api = axios.create({
    baseURL: "https://frontendproject.b2bit.company/account"
});

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    const originalRequest = error.config;

    if (error.response.status === 400 && originalRequest.url === 'https://frontendproject.b2bit.company/account/profile/') 
    {
        return Promise.reject(error);
    }
});