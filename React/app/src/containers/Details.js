/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import Details from 'src/components/MapPage/Details';
import { placeSubmit, addForm, loadPlace } from 'src/store/reducers/map';

/*
 * Code
 */
const mapStateToProps = state => ({
  myPlace: state.map.myPlace,
  newPlace: state.map.newPlace,
});

const mapDispatchToProps = dispatch => ({
  onPlaceSubmit: () => {
    dispatch(placeSubmit());
  },
  addForm: () => {
    dispatch(addForm());
  },
  loadPlace: () => {
    dispatch(loadPlace());
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Details);
