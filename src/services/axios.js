import axios from 'axios';
import { get } from 'lodash';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  (config) => {
    const persistedState = localStorage.getItem('persist:INFOWAVE');

    if (persistedState) {
      const authState = JSON.parse(get(JSON.parse(persistedState), 'auth', '{}'));
      const token = get(authState, 'token', null);

      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
