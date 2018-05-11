/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Contact from 'src/components/Contact';
import { contactSubmit } from 'src/store/reducers/contact';
import { toggleContact } from 'src/store/reducers/buttons';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openContact: state.buttons.openContact,
  send: state.contact.send,
});

const mapDispatchToProps = dispatch => ({
  contactSubmit: () => {
    dispatch(contactSubmit());
  },
  toggleContact: () => {
    dispatch(toggleContact());
  },
});

// Container
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

/**
 * Export
 */
export default ContactContainer;
