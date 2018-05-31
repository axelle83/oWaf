
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
const LOGIN_CLOSE = 'LOGIN_CLOSE';

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
    // change view from login to pasword
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
        userError: false,
      };

    // change of an input
    case LOGIN_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
        userError: false,
      };

    // login form submit
    case LOGIN_SUBMIT:
      return {
        ...state,
      };

    // connection after login submit
    case CONNECT:
      return {
        ...state,
        logged: true,
      };

    // password form submit
    case PASS_SUBMIT:
      return {
        ...state,
      };

    // confirm new password send
    case SEND_PASS:
      return {
        ...state,
        passSend: true,
      };

    // there is an error, user not recognized
    case USER_ERROR:
      return {
        ...state,
        userError: true,
      };

    // disconnect
    case DISCONNECT:
      return {
        ...state,
        logged: false,
      };

    // close the window
    case LOGIN_CLOSE:
      return {
        ...state,
        visible: false,
      };

    // default case
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
export const closeLogin = () => ({
  type: LOGIN_CLOSE,
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
