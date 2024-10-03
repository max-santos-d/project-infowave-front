import * as types from '../types';

export const clickButtonRequest = (previousPath) => {
  return {
    type: types.BUTTON_CLICKED_REQUEST,
    payload: previousPath,
  };
};

export const clickButtonSuccess = () => {
  return {
    type: types.BUTTON_CLICKED_SUCCESS,
  };
};

export const clickButtonFailure = () => {
  return {
    type: types.BUTTON_CLICKED_FAILURE,
  };
};
