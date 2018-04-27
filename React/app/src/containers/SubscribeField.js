/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import SubscribeField from 'src/components/SubscribeField';
import { changeInput } from 'src/store/reducers/memberForm';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeInput({ name: ownProps.name, value }));
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(SubscribeField);
