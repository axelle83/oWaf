/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaEdit from 'react-icons/lib/fa/edit';
import FaClose from 'react-icons/lib/fa/close';

/*
 * Local import
 */
import ChatMessages from 'src/containers/Chat/ChatMessages';
import ChatForm from 'src/containers/Chat/ChatForm';

/*
 * Code
 */
const Chat = ({ actions, openChat }) => (
  <div
    id="chat"
    className={
      classNames(
        'chat',
        {
        'chat--open': openChat,
      },
    )
    }
  >
    <FaClose id="chatClose" onClick={actions.toggleChat} />
    <div id="chat-display">
      <ChatMessages />
      <ChatForm />
    </div>
    <FaEdit id="chatEdit" />

  </div>
);
Chat.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  openChat: PropTypes.bool.isRequired,
};

/*
 * Export default
 */
export default Chat;
