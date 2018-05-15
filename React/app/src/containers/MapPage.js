/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import MapPage from 'src/components/MapPage';
import { loadPlace, addForm } from 'src/store/reducers/map';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  logged: state.login.logged,
  add: state.map.add,
  addForm: state.map.addForm,
});

// Actions
const mapDispatchToProps = dispatch => ({
  loadPlace: () => {
    dispatch(loadPlace());
  },
  addForm: () => {
    dispatch(addForm());
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
