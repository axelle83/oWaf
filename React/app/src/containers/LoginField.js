/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import LoginField from 'src/components/LoginField';
import { changeInput } from 'src/store/reducers/loginForm';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeInput({ name: ownProps.name, value }));
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginField);
