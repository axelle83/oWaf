/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import FaClose from 'react-icons/lib/fa/close';

/*
 * Local import
 */
import ChangeView from 'src/containers/ChangeView';
import LoginForm from 'src/containers/LoginForm';

/*
 * Code
 */
/* eslint-disable-next-line */
class Login extends React.Component {
  render() {
    const {
      visible, logged, closeLogin, openLogin,
    } = this.props;
    if (window.location.pathname === '/connect' && logged) return <Redirect to="/membre" />;
    return (
      <div
        id="login"
        className={
        classNames(
          'login',
          {
            'login--open': visible && !openLogin,
          },
        )
      }
      >
        <FaClose id="loginClose" onClick={closeLogin} />
        <ChangeView from="password" to="login" back />
        <LoginForm />
        <ChangeView from="login" to="password" />
      </div>
    );
  }
}

/*
* propTypes
*/
Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
  openLogin: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

/*
 * Export default
 */
export default Login;
