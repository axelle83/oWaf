/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Profile from 'src/components/Profile';
import { profileSubmit } from 'src/store/reducers/member';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  errorpassword: state.member.errorpassword,
});

// Actions
const mapDispatchToProps = dispatch => ({
  onProfileSubmit: () => {
    dispatch(profileSubmit());
  },
});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
/*
 * Export default
 */
export default withRouter(ProfileContainer);
