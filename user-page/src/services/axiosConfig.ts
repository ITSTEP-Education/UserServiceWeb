import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://localhost:7228/api/v1/User', // Указываем базовый URL для UserService
  timeout: 10000, // Таймаут запроса — 10 секунд
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;