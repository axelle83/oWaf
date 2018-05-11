
// import React from 'react';
// import { Redirect } from 'react-router-dom';
/*
 * Types
 */
const CHANGE_VIEW = 'CHANGE_VIEW';
const LOGIN_CHANGE = 'LOGIN_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const PASS_SUBMIT = 'PASS_SUBMIT';
const DISCONNECT = 'DISCONNECT';
const CONNECT = 'CONNECT';
const SEND_PASS = 'SEND_PASS';
const USER_ERROR = 'USER_ERROR';

/*
 * State
 */
const initialState = {
  view: 'login',
  logged: false,
  passSend: false,
  userError: false,
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
        userError: false,
      };

    case LOGIN_SUBMIT:
      return {
        ...state,
      };

    case CONNECT:
      return {
        ...state,
        logged: true,
      };

    case DISCONNECT:
      return {
        ...state,
        looged: false,
      };

    case PASS_SUBMIT:
      return {
        ...state,
      };

    case SEND_PASS:
      return {
        ...state,
        passSend: true,
      };

    case USER_ERROR:
      return {
        ...state,
        userError: true,
      };

    case LOGIN_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

/*
 * Action creators
 */
export const changeView = view => ({
  type: CHANGE_VIEW,
  view,
});
export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});
export const disconnect = () => ({
  type: DISCONNECT,
});
export const connect = data => ({
  type: CONNECT,
  data,
});
export const newpassSubmit = () => ({
  type: PASS_SUBMIT,
});
export const sendPass = () => ({
  type: SEND_PASS,
});
export const userError = () => ({
  type: USER_ERROR,
});
export const changeLogin = ({ name, value }) => ({
  type: LOGIN_CHANGE,
  name,
  value,
});

export default reducer;
