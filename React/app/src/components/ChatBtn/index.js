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
  <FaWeChat id="chatBtn" onClick={actions.toggleChat} />
);
ChatBtn.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};

/**
 * Export
 */
export default ChatBtn;
