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
      //const newState = { ...state };
      console.log('REDUCER_REQUEST', action.payload);
      return state;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      console.log('REDUCER_SUCCESS', action.payload);

      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
