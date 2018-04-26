/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ChatMessages from 'src/components/ChatMessages';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  messagesIds: state.chatMessages.ids,
});

// Actions
const mapDispatchToProps = {};

// Container
const ChatMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(ChatMessages);

/**
 * Export
 */
export default ChatMessagesContainer;
