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
  <FaEnveloppe id="contactBtn" onClick={actions.toggleContact} />
);
ContactBtn.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};

/**
 * Export
 */
export default ContactBtn;
