
// import React from 'react';
// import { Redirect } from 'react-router-dom';
/*
 * Types
 */
const CHANGE_VIEW = 'CHANGE_VIEW';
const LOGIN_CHANGE = 'LOGIN_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
const PASS_SUBMIT = 'PASS_SUBMIT';
const DISCONNECT = 'DISCONNECT';
const CONNECT = 'CONNECT';

/*
 * State
 */
const initialState = {
  view: 'login',
  logged: false,
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
      };
    case LOGIN_SUBMIT:
      // console.log(state.pseudo);
      // console.log(state.password);
      return {
        ...state,
        // logged: true,
      };
    case CONNECT:
      // console.log(state.pseudo);
      // console.log(state.password);
      return {
        ...state,
        logged: true,
      };
    case DISCONNECT:
      return {
        initialState,
      };

    case PASS_SUBMIT:
      // console.log(state.email);
      return {
        ...state,
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
export const connect = () => ({
  type: CONNECT,
});
export const newpassSubmit = () => ({
  type: PASS_SUBMIT,
});
export const changeLogin = ({ name, value }) => ({
  type: LOGIN_CHANGE,
  name,
  value,
});

export default reducer;
