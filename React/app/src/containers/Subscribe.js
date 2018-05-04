/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Subscribe from 'src/components/Subscribe';
import { subscribeSubmit } from 'src/store/reducers/memberForm';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  errorpassword: state.memberForm.errorpassword,
});

// Actions
const mapDispatchToProps = dispatch => ({
  onSubscribeSubmit: () => {
    dispatch(subscribeSubmit());
  },
});

const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);
/*
 * Export default
 */
export default withRouter(SubscribeContainer);
