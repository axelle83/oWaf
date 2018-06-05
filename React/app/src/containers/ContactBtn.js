/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import ContactBtn from 'src/components/ContactBtn';

import { toggleContact } from 'src/store/reducers/buttons';

/*
 * Code
 */

const mapStateToProps = state => ({
  openContact: state.buttons.openContact,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleContact }, dispatch),
});

/*
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(ContactBtn);
