import * as types from '../types';

export const loginRequest = (payload) => {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (payload) => {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
};

export const editUserRequest = (payload) => {
  return {
    type: types.EDITUSER_REQUEST,
    payload,
  };
};

export const editUserSuccess = (payload) => {
  return {
    type: types.EDITUSER_SUCCESS,
    payload,
  };
};

export const editUserFailure = (payload) => {
  return {
    type: types.EDITUSER_FAILURE,
    payload,
  };
};
