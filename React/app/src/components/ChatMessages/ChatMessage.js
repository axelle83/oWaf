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
    <div className="message-user">
      {username}
    </div>
    <div className="message-content">
      {content}
    </div>
    <div className="message-date">
      {date}
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
