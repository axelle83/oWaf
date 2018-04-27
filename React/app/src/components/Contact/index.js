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
const Contact = ({ visible }) => (
  <div
    id="contact"
    className={
      classNames(
        'contact',
        {
        'contact--open': visible,
      },
    )
    }
  >
    Nous contacter
  </div>
);

Contact.propTypes = {
  visible: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Contact;
