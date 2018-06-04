/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import ChatBtn from 'src/components/ChatBtn';

import { toggleChat } from 'src/store/reducers/buttons';

/*
 * Code
 */
const mapStateToProps = state => ({
  openChat: state.buttons.openChat,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleChat }, dispatch),
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChatBtn);
