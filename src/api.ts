import axios from 'axios';

// Connects to your live Render server
const api = axios.create({
  // CRITICAL FIX: Added /api to the end of the URL
  baseURL: 'https://smartshop-api-ai52.onrender.com/api',
});

// Automatically attach the JWT VIP Pass to every request...

// Automatically attach the JWT VIP Pass to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
