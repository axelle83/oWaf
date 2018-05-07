/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import SubscribeUpload from 'src/components/SubscribeUpload';
import { loadImage } from 'src/store/reducers/memberForm';

/*
 * Code
 */
const mapStateToProps = state => ({
  selectedFile: state.selectedFile,
});

const mapDispatchToProps = dispatch => ({
  onChange: (value) => {
    // console.log('container', value);
    dispatch(loadImage(value));
  },
});

const SubscribeUploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeUpload);

/*
 * Export default
 */
export default withRouter(SubscribeUploadContainer);