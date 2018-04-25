/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Chat from 'src/components/Chat';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  openChat: state.chatBtn.openChat,
});

const mapDispatchToProps = {};

// Container
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

/**
 * Export
 */
export default ChatContainer;
