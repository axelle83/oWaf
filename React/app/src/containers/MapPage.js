/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import MapPage from 'src/components/MapPage';
import { loadPlace, addForm, getMyPosition } from 'src/store/reducers/map';

/*
 * Code
 */
const mapStateToProps = state => ({
  logged: state.login.logged,
  add: state.map.add,
  details: state.map.details,
  addForm: state.map.addForm,
});

const mapDispatchToProps = dispatch => ({
  loadPlace: () => {
    dispatch(loadPlace());
  },
  addForm: () => {
    dispatch(addForm());
  },
  getMyPosition: () => {
    dispatch(getMyPosition());
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
