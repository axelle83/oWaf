/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'src/components/Contact';
import { contactSubmit } from 'src/store/reducers/contact';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openContact: state.buttons.openContact,
});

const mapDispatchToProps = dispatch => ({
  contactSubmit: () => {
    dispatch(contactSubmit());
  },
});

// Container
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

/**
 * Export
 */
export default ContactContainer;
