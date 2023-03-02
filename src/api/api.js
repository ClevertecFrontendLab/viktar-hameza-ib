import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
  // baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const apiConfig = config;
  const token = localStorage.getItem('token');
  console.log(token);

  if (token) {
    apiConfig.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
