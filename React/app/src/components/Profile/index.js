/*
* npm install
*
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';


/*
* Local import
 */
import fields from 'src/datas/subscribe';
import SubscribeField from 'src/containers/ProfileField';
import SubscribeRadio from 'src/containers/SubscribeRadio';
// import SubscribeUpload from 'src/containers/SubscribeUpload';

/*
*  Code
 */
class Profile extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onProfileSubmit();
  }

  render() {
    const { logged } = this.props;
    if (window.location.pathname === '/profile' && !logged) return <Redirect to="/" />;
    return (
      <form
        id="profile"
        onSubmit={this.onSubmit}
      >
        <div id="subscribe-title">Mon profil</div>
        <div id="subscribe-me">
          {fields.me.map(field => <SubscribeField key={field.name} {...field} />)}
          <div
            className={
              classNames(
                'password',
                {
                'error-password': this.props.errorpassword,
              },
            )
          }
          >
            Les mots de passe ne sont pas identiques
          </div>
        </div>
        <div className="subscribe-dog-title">Mon chien</div>
        <div className="subscribe-dog">
          {fields.dog.map(field => <SubscribeField key={field.name} {...field} />)}
          <SubscribeRadio name="dogGender" />
          {/* <SubscribeUpload name="dogImage" /> */}
        </div>
        <div className="mandatory">* Champs obligatoires</div>
        <button
          id="profile-submit"
          onClick={this.onSubmit}
        >
          Valider
        </button>
      </form>
    );
  }
}
Profile.propTypes = {
  onProfileSubmit: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  errorpassword: PropTypes.bool,
};
Profile.defaultProps = {
  errorpassword: 'false',
};
/*
* Export default
 */
export default Profile;
