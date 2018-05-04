/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import ChatForm from 'src/components/ChatForm';

import { sendMessage, changeInputForm } from 'src/store/reducers/chatForm';

/**
 * Code
 */
// Données
const mapStateToProps = state => ({
  inputValue: state.chatForm.input,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sendMessage, changeInputForm }, dispatch),
});

// Container
const ChatFormContainer = connect(mapStateToProps, mapDispatchToProps)(ChatForm);

/**
 * Export
 */
export default ChatFormContainer;
