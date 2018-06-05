/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import Login from 'src/components/Login';

/*
 * Code
 */
const mapStateToProps = state => ({
  logged: state.login.logged,
  openLogin: state.buttons.openLogin,
});

const mapDispatchToProps = {};

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login);
