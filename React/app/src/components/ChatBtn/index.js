/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaWeChat from 'react-icons/lib/fa/wechat';

/**
 * Code
 */
const ChatBtn = ({ actions }) => (
  <div
    id="chatBtn"
    // className={
    //   classNames({
    //     'chat--open': openChat,
    //   })
    // }
  >
    <FaWeChat id="chatBtn" onClick={actions.toggleChat} />
  </div>

);
ChatBtn.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};

/**
 * Export
 */
export default ChatBtn;
