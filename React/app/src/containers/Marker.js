/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import Marker from 'src/components/MyMapComponent/Marker';
import { getMyPlace } from 'src/store/reducers/map';

/*
 * Code
 */
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  getMyPlace: (data) => {
    dispatch(getMyPlace(data));
  },
});

const MarkerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marker);

/*
 * Export default
 */
export default withRouter(MarkerContainer);
