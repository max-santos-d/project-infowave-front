import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve, reject) => {
    const key = true;
    setTimeout(() => {
      key ? resolve() : reject();
    }, 2000);
  });

function* exampleRequest({ payload }) {
  try {
    yield call(request);
    yield put(actions.clickButtonSuccess(payload));
    toast.success('BUTTON_CLICKED_SUCCESS');
    window.location.pathname = payload.previousPath;
  } catch (err) {
    console.log(err);
    yield put(actions.clickButtonFailure());
    toast.error('BUTTON_CLICKED_FAILURE');
  }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]);
