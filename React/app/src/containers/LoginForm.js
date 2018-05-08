/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import datas from 'src/datas/subscribe';
import LoginForm from 'src/components/LoginForm';
import { loginSubmit, newpassSubmit } from 'src/store/reducers/login';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  data: datas[state.login.view],
  send: state.login.send,
  view: state.login.view,
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
