/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Subscribe from 'src/components/Subscribe';


/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = {};

const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);
/*
 * Export default
 */
export default withRouter(SubscribeContainer);
