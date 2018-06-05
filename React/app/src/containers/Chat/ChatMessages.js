/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import ChatMessages from 'src/components/ChatMessages';

/*
 * Code
 */
const mapStateToProps = state => ({
  messagesIds: state.chatMessages.ids,
});

const mapDispatchToProps = {};

/*
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
