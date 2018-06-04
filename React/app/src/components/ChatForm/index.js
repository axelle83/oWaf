/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Code
 */
class ChatForm extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.actions.changeInputForm(value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.sendMessage();
  }

  render() {
    const { inputValue } = this.props;
    return (
      <form id="chat-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="chat-form-input"
          placeholder="votre message"
          value={inputValue}
          onChange={this.handleChange}
        />
        <button id="chat-form-submit">
          Envoyer
        </button>
      </form>
    );
  }
}

/*
 * PropTypes
 */
ChatForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};

/*
 * Export default
 */
export default ChatForm;
