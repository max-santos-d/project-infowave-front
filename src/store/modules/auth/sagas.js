import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';

function* LoginRequest({ payload }) {
  try {
    const { data } = yield call(api.post, '/auth', { login: payload.login, password: payload.password });
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

function* EditUserRequest({ payload }) {
  try {
    const { data } = yield call(api.patch, '/user', {
      name: payload.nameEdited,
      username: payload.usernameEdited,
      avatar: payload.avatarEdited,
      email: payload.emailEdited,
    });

    yield put(actions.editUserSuccess({ ...data.response }));
    toast.success('informações editadas');
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.responseError);
    yield put(actions.editUserFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, LoginRequest),
  takeLatest(types.EDITUSER_REQUEST, EditUserRequest),
]);
