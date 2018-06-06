/*
*  Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

/*
* Local import
 */
import fields from 'src/datas/subscribe';
import SubscribeField from 'src/containers/SubscribeField';
import SubscribeRadio from 'src/containers/SubscribeRadio';

/*
*  Code
 */
class Subscribe extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubscribeSubmit();
  }

  render() {
    const { subscribe } = this.props;
    if (subscribe) return <Redirect to="/connect" />;
    return (
      <form
        encType="multipart/form-data"
        className="subscribe-form"
        onSubmit={this.onSubmit}
      >
        <div className="subscribe-title">Inscription</div>
        <div className="subscribe-me">
          <div className="subscribe-me-title">Moi</div>
          {fields.me.map(field => <SubscribeField key={field.name} {...field} />)}
          <div
            className={
              classNames(
                'password',
                {
                  'error-password': this.props.errorpass,
                },
              )
            }
          >
            Le mot de passe doit avoir 6 caractères minimum
          </div>
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
          <div
            className={
              classNames(
                'exist',
                {
                'exist-true': this.props.exist,
              },
            )
          }
          >
            Il existe déjà un utilisateur avec ce pseudo ou cette adresse email
          </div>
        </div>
        <div className="subscribe-dog">
          <div className="subscribe-dog-title">Mon chien</div>
          {fields.dog.map(field => <SubscribeField key={field.name} {...field} />)}
          <SubscribeRadio name="dogGender" />
        </div>
        <div className="mandatory">* Champs obligatoires</div>
        <button
          id="subscribe-submit"
          onClick={this.onSubmit}
        >
          S'inscrire
        </button>
      </form>
    );
  }
}
Subscribe.propTypes = {
  onSubscribeSubmit: PropTypes.func.isRequired,
  errorpassword: PropTypes.bool.isRequired,
  errorpass: PropTypes.bool.isRequired,
  exist: PropTypes.bool.isRequired,
  subscribe: PropTypes.bool.isRequired,
};

/*
* Export default
 */
export default Subscribe;
