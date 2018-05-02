/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import datas from 'src/datas/subscribe';
import LoginForm from 'src/components/LoginForm';
import { loginSubmit } from 'src/store/reducers/loginForm';


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
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
