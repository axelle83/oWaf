/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import Profile from 'src/components/Profile';
import { profileSubmit, profileClose, profileDelete } from 'src/store/reducers/member';

/*
 * Code
 */
const mapStateToProps = state => ({
  errorpassword: state.member.errorpassword,
  logged: state.login.logged,
  profile: state.member.profile,
  deleted: state.member.deleted,
});

const mapDispatchToProps = dispatch => ({
  onProfileSubmit: () => {
    dispatch(profileSubmit());
  },
  onProfileClose: () => {
    dispatch(profileClose());
  },
  onProfileDelete: () => {
    dispatch(profileDelete());
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
