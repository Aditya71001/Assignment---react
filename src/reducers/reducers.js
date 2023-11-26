import * as actionTypes from './actionTypes';

const initialState = {
  name: '',
  age: null,
};

const enrollmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionTypes.SET_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case actionTypes.RESET_ENROLLMENT:
      return initialState;
    default:
      return state;
  }
};

export default enrollmentReducer;
