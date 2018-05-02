/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ChatMessage from 'src/components/ChatMessages/ChatMessage';

/**
 * Code
 */
// Données
const mapStateToProps = (state, ownProps) => ({
  ...state.chatMessages.list[ownProps.id],
  username: state.loginForm.pseudo,
  myself: state.buttons.username === state.chatMessages.list[ownProps.id].username,
});

// Actions
const mapDispatchToProps = {};

// Container
const ChatMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatMessage);

/**
 * Export
 */
export default ChatMessageContainer;
