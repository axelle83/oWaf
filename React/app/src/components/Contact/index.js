/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaClose from 'react-icons/lib/fa/close';

/*
 * Local import
 */
import ContactField from 'src/containers/ContactField';

/*
 * Code
 */
class Contact extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.contactSubmit();
  }

  render() {
    const { openContact, send, toggleContact } = this.props;
    return (
      <div
        id="contact"
        className={
          classNames(
            'contact',
            {
              'contact--open': openContact,
            },
          )
        }
      >
        <form method="POST" id="contactform" onSubmit={this.onSubmit}>
          <div id="contactHead">
            <FaClose id="contactClose" onClick={toggleContact} />
            <h1 id="contact-title">Nous contacter</h1>
          </div>
          <ContactField
            type="email"
            name="email"
            placeholder="Votre email"
          />
          <ContactField
            type="text"
            name="object"
            placeholder="L'objet de votre message"
          />
          <ContactField
            type="textarea"
            name="message"
            placeholder="Votre message"
          />
          <button
            type="submit"
            id="contact-submit"
            className={
              classNames(
              'contact',
              { 'contact--send': !send },
              )
            }
          >
          Valider
          </button>
          <button
            onClick={toggleContact}
            id="contact-send"
            className={
              classNames(
              'contact',
              { 'contact--send': send },
              )
            }
          >
          Fermer
          </button>
          <p
            id="contactSend"
            className={
            classNames(
              'contact',
              { 'contact--send': send },
            )
            }
          >
            Votre message a bien été envoyé
          </p>
        </form>
      </div>
    );
  }
}

/*
 * PropTypes
 */
Contact.propTypes = {
  openContact: PropTypes.bool.isRequired,
  send: PropTypes.bool.isRequired,
  contactSubmit: PropTypes.func.isRequired,
  toggleContact: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default Contact;
