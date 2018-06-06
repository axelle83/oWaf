/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import Subscribe from 'src/components/Subscribe';
import { subscribeSubmit } from 'src/store/reducers/member';

/*
 * Code
 */
const mapStateToProps = state => ({
  errorpassword: state.member.errorpassword,
  errorpass: state.member.errorpass,
  exist: state.member.exist,
  subscribe: state.member.subscribe,
});

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
