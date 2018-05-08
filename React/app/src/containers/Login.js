/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  logged: state.login.logged,
});

const mapDispatchToProps = {};

// Container
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

/**
 * Export
 */
export default LoginContainer;
