/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import LoginField from 'src/components/LoginField';
import { changeLogin } from 'src/store/reducers/login';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeLogin({ name: ownProps.name, value }));
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginField);
