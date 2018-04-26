/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Code
 */
const ChatMessage = ({
  username, content, myself, date,
}) => (
  <div className={classNames(
    'message',
    {
      'message--own': myself,
    },
  )}
  >
    <div className="message-infos">
      <span className="message-user">{username}</span>
      <span className="message-date">{date}</span>
    </div>
    <div className="message-content">
      {content}
    </div>
  </div>
);

ChatMessage.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  myself: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default ChatMessage;
