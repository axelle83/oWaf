/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaEnveloppe from 'react-icons/lib/fa/envelope';

/**
 * Code
 */
const ContactBtn = ({ actions }) => (
  <div id="contactBtn">
    <FaEnveloppe
      onClick={actions.toggleContact}
    />
    <span id="contactBtn-info">Nous contacter</span>
  </div>
);
ContactBtn.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};

/**
 * Export
 */
export default ContactBtn;
