/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import MapField from 'src/components/MapPage/MapField';
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

const MapFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapField);

/*
 * Export default
 */
export default withRouter(MapFieldContainer);
