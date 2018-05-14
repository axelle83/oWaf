/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import MapSelect from 'src/components/MapPage/MapSelect';
import { changeMapInput } from 'src/store/reducers/map';

/*
 * Code
 */
const mapStateToProps = state => ({
  categories: state.map.categories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeMapInput({ name: ownProps.name, value }));
  },
});

const MapSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapSelect);

/*
 * Export default
 */
export default withRouter(MapSelectContainer);
