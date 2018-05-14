/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import DetailsInfo from 'src/components/MapPage/DetailsInfo';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  myPlace: state.map.myPlace,
});

// Actions
const mapDispatchToProps = {};

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(DetailsInfo);
