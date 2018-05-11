/**
 * Npm import
 */
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import HomeMembre from 'src/components/HomeMembre';
import { getPost } from 'src/store/reducers/post';


/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  getPost: () => {
    dispatch(getPost());
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(HomeMembre);
