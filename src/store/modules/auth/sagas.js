import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';

function* LoginRequest({ payload }) {
  try {
    const { data } = yield call(api.post, '/auth', payload);

    yield put(actions.loginSuccess({ ...data.response }));
    toast.success('Login realizado.');
    console.log('PREVIOUS');

    //window.location.assign(payload.previousPath);
    /* if (payload.navigate) {
      const { previousPath, navigate } = payload;
      navigate(previousPath, { replace: true });
    } */

    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.response.token;

    //console.log(payload.callback());
    //if (payload.callback) payload.callback(payload.previousPath);

    //window.location.pathname = payload.previousPath;
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.responseError);
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, LoginRequest)]);
