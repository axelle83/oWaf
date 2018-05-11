/*
* npm install
*
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
* Local import
 */
import fields from 'src/datas/subscribe';
import SubscribeField from 'src/containers/SubscribeField';
import SubscribeRadio from 'src/containers/SubscribeRadio';
import SubscribeUpload from 'src/containers/SubscribeUpload';

/*
*  Code
 */
class Subscribe extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubscribeSubmit();
  }

  // addDog = () => {
  //   console.log('add');
  //   document.getElementById('next').innerHTML += 'test';
  // render('<div>test</div>', document.getElementById('next'));
  // }

  render() {
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
        </div>
        <div className="subscribe-dog">
          <div className="subscribe-dog-title">Mon chien</div>
          {fields.dog.map(field => <SubscribeField key={field.name} {...field} />)}
          <SubscribeRadio name="dogSex" />
          <SubscribeUpload name="dogImage" />
        </div>
        {/* <button
          id="subscribe-dog-add"
          onClick={this.addDog}
        >
          Ajouter un chien
        </button> */}
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
  errorpassword: PropTypes.bool,
};
Subscribe.defaultProps = {
  errorpassword: 'false',
};
/*
* Export default
 */
export default Subscribe;
