/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */

/**
 * Code
 */
const Contact = ({ openContact }) => (
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
    Nous contacter
  </div>
);

Contact.propTypes = {
  openContact: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Contact;
