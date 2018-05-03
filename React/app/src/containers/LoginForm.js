/*
 * Npm import
 */
// import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

/*
 * Local import
 */
import datas from 'src/datas/subscribe';
import LoginForm from 'src/components/LoginForm';
import { loginSubmit, newpassSubmit } from 'src/store/reducers/loginForm';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  data: datas[state.loginForm.view],
});

// Actions
const mapDispatchToProps = dispatch => ({
  loginSubmit: () => {
    dispatch(loginSubmit());
  },
  newpassSubmit: () => {
    dispatch(newpassSubmit());
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
