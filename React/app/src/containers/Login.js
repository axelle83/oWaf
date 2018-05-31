/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';
import { toggleLogin } from 'src/store/reducers/buttons';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  logged: state.login.logged,
  openLogin: state.buttons.openLogin,
});

const mapDispatchToProps = dispatch => ({
  closeLogin: () => {
    dispatch(toggleLogin());
  },
});

// Container
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

/**
 * Export
 */
export default LoginContainer;
