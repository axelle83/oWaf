/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'src/components/Contact';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openContact: state.buttons.openContact,
});

const mapDispatchToProps = {};

// Container
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

/**
 * Export
 */
export default ContactContainer;
