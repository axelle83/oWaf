/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import ChatMessage from 'src/containers/Chat/ChatMessage';

/*
 * Code
 */
const ChatMessages = ({ messagesIds }) => (
  <div id="messages">
    {messagesIds.map(id => (
      <ChatMessage
        key={id}
        id={id}
      />
    ))}
  </div>
);

/*
 * PropTypes
 */
ChatMessages.propTypes = {
  messagesIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

/*
 * Export defaut
 */
export default ChatMessages;
