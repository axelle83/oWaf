/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import HomeVisiteur from 'src/components/HomeVisiteur';
import { loadPost } from 'src/store/reducers/post';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  title1: state.post.title1,
  category1: state.post.category1,
  excerpt1: state.post.excerpt1,
  title2: state.post.title2,
  category2: state.post.category2,
  excerpt2: state.post.excerpt2,
  title3: state.post.title3,
  category3: state.post.category3,
  excerpt3: state.post.excerpt3,
});

// Actions
const mapDispatchToProps = dispatch => ({
  loadPost: () => {
    dispatch(loadPost());
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(HomeVisiteur);
