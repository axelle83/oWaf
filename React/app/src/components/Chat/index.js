/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaWeChat from 'react-icons/lib/fa/wechat';

/**
 * Local import
 */
import ChatMessages from 'src/containers/Chat/ChatMessages';
import ChatForm from 'src/containers/Chat/ChatForm';
import ChatBtn from 'src/containers/Chat/ChatBtn';


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
    <FaWeChat />
    <div id="chat-display">
      <ChatMessages />
      <ChatForm />
    </div>
  </div>
);
Chat.propTypes = {
  openChat: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default Chat;
