import * as types from '../types';

const initialState = {
  buttonClicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUTTON_CLICKED_REQUEST: {
      //const newState = { ...state };
      console.log('BUTTON_CLICKED_REQUEST');
      return state;
    }
    case types.BUTTON_CLICKED_SUCCESS: {
      console.log('BUTTON_CLICKED_SUCCESS');
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }
    case types.BUTTON_CLICKED_FAILURE: {
      console.log('BUTTON_CLICKED_FAILURE');
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
