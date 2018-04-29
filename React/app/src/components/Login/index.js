/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */

/**
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
    <form id="login-form">
      <input id="login-email" value="mail" />
      <input id="login-password" value="pass" />
    </form>
  </div>
);

Login.propTypes = {
  visible: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Login;
