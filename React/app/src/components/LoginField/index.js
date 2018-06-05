/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaLock from 'react-icons/lib/fa/lock';
import FaUser from 'react-icons/lib/fa/user';

/*
 * Component
 */
class LoginField extends React.Component {
  state = {
    error: false,
    focus: false,
  }

  // Handle change event
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);

    // check mandatory fields
    if (evt.target.required) {
      const error = !value;
      this.setState({ error });
    }
  }

  // Render
  render() {
    const { error, focus } = this.state;
    const {
      name,
      placeholder,
      inputValue,
      type,
      fa,
    } = this.props;
    const Icon = fa === 'FaLock' ? FaLock : FaUser;
    const id = `field-${name}`;
    return (
      <div
        className={classNames(
          'field',
          { 'field--has-value': inputValue !== '' },
          { 'field--has-error': error },
          { 'field--has-focus': focus },
        )}
      >
        <Icon />
        <input
          type={type}
          className="field-input"
          id={id}
          name={name}
          placeholder={placeholder}
          inputvalue={inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          required
        />
      </div>
    );
  }
}

/*
 * PropTypes
 */
LoginField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fa: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
};

LoginField.defaultProps = {
  inputValue: '',
  type: 'text',
};

/*
 * Export default
 */
export default LoginField;
