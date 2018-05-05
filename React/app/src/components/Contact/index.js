/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */
import ContactField from 'src/containers/ContactField';
/**
 * Code
 */
class Contact extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.contactSubmit();
  }

  render() {
    const { openContact } = this.props;
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
          <h1 id="contactform-title">Nous contacter</h1>
          <div>blabla</div>
          <ContactField
            type="text"
            name="object"
            placeholder="Titre du message"
          />
          <ContactField
            type="textarea"
            name="main"
            placeholder="Votre message"
          />
          <button type="submit" id="contactform-submit">
          Valider
          </button>
        </form>
      </div>
    );
  }
}

Contact.propTypes = {
  openContact: PropTypes.bool.isRequired,
  contactSubmit: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Contact;
