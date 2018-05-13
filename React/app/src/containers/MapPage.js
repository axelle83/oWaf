/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import MapPage from 'src/components/MapPage';
import { loadPlace } from 'src/store/reducers/map';

/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  loadPlace: () => {
    dispatch(loadPlace());
  },
});

const MapPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPage);
/*
 * Export default
 */
export default withRouter(MapPageContainer);
