/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import ContactBtn from 'src/components/ContactBtn';

import { toggleContact } from 'src/store/reducers/buttons';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openContact: state.buttons.openContact,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleContact }, dispatch),
});

// Container
const ContactBtnContainer = connect(mapStateToProps, mapDispatchToProps)(ContactBtn);

/**
 * Export
 */
export default ContactBtnContainer;
