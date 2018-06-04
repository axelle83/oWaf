/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import ChatForm from 'src/components/ChatForm';

import { sendMessage, changeInputForm } from 'src/store/reducers/chatForm';

/*
 * Code
 */
const mapStateToProps = state => ({
  inputValue: state.chatForm.input,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sendMessage, changeInputForm }, dispatch),
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);
