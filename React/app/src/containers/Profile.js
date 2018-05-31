/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Profile from 'src/components/Profile';
import { profileSubmit, profileClose } from 'src/store/reducers/member';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  errorpassword: state.member.errorpassword,
  logged: state.login.logged,
  profile: state.member.profile,
});

// Actions
const mapDispatchToProps = dispatch => ({
  onProfileSubmit: () => {
    dispatch(profileSubmit());
  },
  onProfileClose: () => {
    dispatch(profileClose());
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
