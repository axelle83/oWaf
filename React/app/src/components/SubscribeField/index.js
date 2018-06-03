/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import validateEmail from 'validate-email';

/*
 * Component
 */
class SubscribeField extends React.Component {
  state = {
    error: false,
    focus: false,
  }

  modify = true;

  // Handle change event
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);
    // check if email input is of email format
    if (this.props.type === 'email') {
      const error = !validateEmail(value);
      this.setState({ error });
    }
    // check if birth year > 2000
    if (this.props.type === 'number') {
      const error = !(value.length === 4 && value > 2000);
      this.setState({ error });
    }
    // check mandatory fields
    if (this.props.mandatory === true) {
      const error = !value;
      this.setState({ error });
    }
  }

  // Render
  render() {
    const { error, focus } = this.state;
    const {
      name, placeholder, inputValue, type, mandatory,
    } = this.props;
    const id = `subscribe-${name}`;
    if (name === 'pseudo' && window.location.pathname === '/profile') this.modify = false;
    return (
      <div
        className={classNames(
          'subscribe',
          { 'subscribe--has-value': inputValue !== '' },
          { 'subscribe--has-error': error },
          { 'subscribe--has-focus': focus },
        )}
      >
        <label
          className="subscribe-label"
          htmlFor={id}
        >
          {placeholder}
        </label>
        <input
          type={type}
          className="subscribe-input"
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={this.handleChange}
          readOnly={!this.modify}
          required={mandatory}
        />
        {mandatory && <span className="field-mandatory">*</span>}
        {!mandatory && <span className="field-not-mandatory">.</span>}
      </div>
    );
  }
}

/*
 * PropTypes
 */
SubscribeField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mandatory: PropTypes.bool.isRequired,
  inputValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']).isRequired,
};

SubscribeField.defaultProps = {
  inputValue: '',
};

/*
* Export Default
*/
export default SubscribeField;
