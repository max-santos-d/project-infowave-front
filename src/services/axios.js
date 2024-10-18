import axios from 'axios';
import { get } from 'lodash';

import store from '../store/index';
import * as actions from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Interceptor de request para adicionar o token no header
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

// Interceptor de resposta para capturar erro de token expirado
api.interceptors.response.use(
  (response) => {
    console.log('AXIOS - OK');
    return response;
  },
  async (error) => {
    console.log('AXIOS - NOT OK');
    console.log(error.response.status === 401);
    if (error.response && error.response.status === 401) {
      //store.dispatch(logoutRequest());
      store.dispatch(actions.loginFailure());
    }
    return Promise.reject(error);
  }
);

export default api;
