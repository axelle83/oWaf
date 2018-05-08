/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaWeChat from 'react-icons/lib/fa/wechat';
import classNames from 'classnames';

/**
 * Code
 */
const ChatBtn = ({ actions, visible }) => (
  <div id="chatBtn">
    <FaWeChat
      onClick={actions.toggleChat}
      className={classNames(
        'chat',
        {
          chatVisible: visible,
        },
      )}
    />
    <span id="chatBtn-info">Accéder au chat</span>
  </div>
);
ChatBtn.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  visible: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default ChatBtn;
