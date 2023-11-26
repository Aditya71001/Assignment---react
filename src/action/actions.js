import * as actionTypes from './actionTypes';

export const setName = (name) => ({
  type: actionTypes.SET_NAME,
  payload: name,
});

export const setAge = (age) => ({
  type: actionTypes.SET_AGE,
  payload: age,
});

export const resetEnrollment = () => ({
  type: actionTypes.RESET_ENROLLMENT,
});
