
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1001/api', // Set your base URL here
    headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
});

// Add a request interceptor to include the token in headers
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token'); // Get the token from local storage
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`; // Set the Authorization header
//         }
//         return config; // Return the modified config
//     },
//     (error) => {
//         return Promise.reject(error); // Handle the error
//     }
// );

export default axiosInstance;