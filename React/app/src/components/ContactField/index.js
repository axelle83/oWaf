/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
 * Component
 */
class ContactField extends React.Component {
  state = {
    error: false,
  }

  // Handle change event
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);
    // on vérifie les champs obligatoires
    if (evt.target.required) {
      const error = !value;
      this.setState({ error });
    }
  }

  // Render
  render() {
    const { error } = this.state;
    const {
      name, placeholder, inputValue, type,
    } = this.props;
    const id = `contact-${name}`;
    return (
      <div
        className={classNames(
          'contact',
          { 'contact--has-value': inputValue !== '' },
          { 'contact--has-error': error },
        )}
      >
        <input
          type={type}
          className={classNames(
            'contact-input',
            { 'contact-textarea': type === 'textarea' },
          )}
          id={id}
          name={name}
          placeholder={placeholder}
          inputvalue={inputValue}
          onChange={this.handleChange}
          required
        />
      </div>
    );
  }
}

/*
 * PropTypes
*/
ContactField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'textarea', 'email']).isRequired,
};

ContactField.defaultProps = {
  inputValue: '',
};

/*
 * Export default
*/
export default ContactField;
