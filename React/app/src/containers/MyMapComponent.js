/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import MyMapComponent from 'src/components/MyMapComponent';
import { loadPlace, getMyPosition } from 'src/store/reducers/map';

/*
 * Code
 */
const mapStateToProps = state => ({
  places: state.map.places,
  lat: state.map.lat,
  lng: state.map.lng,
});

const mapDispatchToProps = dispatch => ({
  loadPlace: () => {
    dispatch(loadPlace());
  },
});

const MyMapComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyMapComponent);

/*
 * Export default
 */
export default withRouter(MyMapComponentContainer);
