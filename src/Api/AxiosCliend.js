import axios from 'axios';
import queryString from 'query-string'

const axiosCliend = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params)
})

axiosCliend.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

axiosCliend.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response
}, error => {
    console.log(error)
    if (error.response) {
        throw error
    }
    return {
        status: 500,
        message: "Server error"
    }
})

export default axiosCliend