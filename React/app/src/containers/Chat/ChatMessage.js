/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import ChatMessage from 'src/components/ChatMessages/ChatMessage';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  ...state.chatMessages.list[ownProps.id],
  myself: state.member.pseudo === state.chatMessages.list[ownProps.id].username,
});

const mapDispatchToProps = {};

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage);
