/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */
import ChatMessages from 'src/containers/Chat/ChatMessages';
import ChatForm from 'src/containers/Chat/ChatForm';


/**
 * Code
 */
const Chat = ({ openChat }) => (
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
    <ChatMessages />
    <ChatForm />
  </div>
);
Chat.propTypes = {
  openChat: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Chat;
