/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import Details from 'src/components/MapPage/Details';
import { placeSubmit, addForm } from 'src/store/reducers/map';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  myPlace: state.map.myPlace,
  newPlace: state.map.newPlace,
});

// Actions
const mapDispatchToProps = dispatch => ({
  onPlaceSubmit: () => {
    dispatch(placeSubmit());
  },
  addForm: () => {
    dispatch(addForm());
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Details);
