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
const mapStateToProps = state => ({
  myPlace: state.map.myPlace,
});

const mapDispatchToProps = {};

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(DetailsInfo);
