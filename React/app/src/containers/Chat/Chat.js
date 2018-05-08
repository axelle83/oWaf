/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Chat from 'src/components/Chat';

import { toggleChat } from 'src/store/reducers/buttons';
/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openChat: state.buttons.openChat,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleChat }, dispatch),
});

// Container
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

/**
 * Export
 */
export default ChatContainer;
