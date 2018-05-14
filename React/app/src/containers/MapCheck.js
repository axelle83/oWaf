/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import MapCheck from 'src/components/MapPage/MapCheck';
import { changeMapInput } from 'src/store/reducers/map';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  inputValue: state.map[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeMapInput({ name: ownProps.name, value }));
  },
});

const MapCheckContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapCheck);

/*
 * Export default
 */
export default withRouter(MapCheckContainer);
