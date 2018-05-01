/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local import
 */
import ChangeView from 'src/containers/ChangeView';
import LoginForm from 'src/containers/LoginForm';


/*
 * Code
 */
const Login = ({ visible }) => (
  <div
    id="login"
    className={
      classNames(
        'login',
        {
        'login--open': visible,
      },
      )
      }
  >
    <ChangeView from="password" to="login" back />
    <LoginForm />
    <ChangeView from="login" to="password" />
  </div>
);
Login.propTypes = {
  visible: PropTypes.bool.isRequired,
};

/*
 * Export default
 */
export default Login;
