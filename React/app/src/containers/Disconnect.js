/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import Disconnect from 'src/components/Disconnect';
import { disconnect } from 'src/store/reducers/login';

/*
 * Code
 */
const mapStateToProps = state => ({
  logged: state.login.logged,
});

const mapDispatchToProps = dispatch => ({
  disconnect: () => {
    dispatch(disconnect());
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Disconnect);
