import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };

      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.EDITUSER_REQUEST: {
      const newState = { ...state };
      return newState;
    }
    case types.EDITUSER_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.user = action.payload;
      return newState;
    }
    case types.EDITUSER_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
