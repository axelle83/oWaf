/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import SubscribeField from 'src/components/SubscribeField';
import { changeInput } from 'src/store/reducers/memberForm';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeInput({ name: ownProps.name, value }));
  },
});

const SubscribeFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeField);

/*
 * Export default
 */
export default withRouter(SubscribeFieldContainer);
