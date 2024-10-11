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

    if (payload.navigate) {
      const { previousPath, navigate } = payload;
      navigate(previousPath, { replace: true });
    }
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.responseError);
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, LoginRequest)]);
