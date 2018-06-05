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
        id="subscribe"
        onSubmit={this.onSubmit}
      >
        <div id="subscribe-title">Inscription</div>
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
  exist: PropTypes.bool.isRequired,
  subscribe: PropTypes.bool.isRequired,
};
// Subscribe.defaultProps = {
//   errorpassword: 'false',
// };
/*
* Export default
 */
export default Subscribe;
