/*
* Npm import
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

/*
*  Code
 */
class Profile extends React.Component {
  // form submit handler
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onProfileSubmit();
  }
  // window close handler
  onClose = (evt) => {
    evt.preventDefault();
    this.props.onProfileClose();
    this.close = true;
  }
  // delete user & dog
  onDelete = (evt) => {
    evt.preventDefault();
    this.props.onProfileDelete();
  }

  close = false;

  // render
  render() {
    const { logged, profile, deleted } = this.props;
    if (window.location.pathname === '/profile' && !logged) return <Redirect to="/" />;
    if (window.location.pathname === '/profile' && this.close) return <Redirect to="/member" />;
    if (window.location.pathname === '/profile' && deleted) return <Redirect to="/disconnect" />;
    return (
      <form
        className="subscribe-form"
        onSubmit={this.onSubmit}
      >
        <div className="subscribe-title">Mon profil</div>
        <div className="subscribe-me">
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
        </div>
        <div className="mandatory">* Champs obligatoires</div>
        <div
          className={
            classNames(
            'profile',
            { 'profile--confirm': profile },
            )
          }
        >
          Votre profil a bien été modifié
        </div>
        <div id="profileButtons">
          <button
            id="profile-submit"
            className={
              classNames(
                'profile',
                { 'profile--modified': !profile },
              )
            }
            onClick={this.onSubmit}
          >
            Valider mon profil
          </button>
          <button
            id="profile-delete"
            className={
              classNames(
                'profile',
                { 'profile--modified': !profile },
              )
            }
            onClick={this.onDelete}
          >
            Supprimer mon compte
          </button>
          <button
            id="profile-close"
            className={
              classNames(
                'profile',
                { 'profile--modified': profile },
              )
            }
            onClick={this.onClose}
          >
            Retour à l'accueil
          </button>
        </div>
      </form>
    );
  }
}

/*
* PropTypes
 */
Profile.propTypes = {
  onProfileDelete: PropTypes.func.isRequired,
  onProfileSubmit: PropTypes.func.isRequired,
  onProfileClose: PropTypes.func.isRequired,
  profile: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
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
