/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import datas from 'src/datas/subscribe';
import LoginForm from 'src/components/LoginForm';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  data: datas[state.loginForm.view],
});

// Actions
const mapDispatchToProps = {};


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
