/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import validateEmail from 'validate-email';


/*
 * Local import
 */


/*
 * Code
 */


/*
 * Component
 */
export default class SubscribeField extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  }

  static defaultProps = {
    value: '',
    type: 'text',
  }

  state = {
    error: false,
    focus: false,
  }


  /**
   * Handle change event
   * @param {Event} evt objet d'evement
   */
  handleChange = (evt) => {
    // Modifier le state de <App />
    const { value } = evt.target;
    this.props.onChange(value);
    // On vérifie l'email
    if (this.props.type === 'email') {
      // const error = !validateEmail(value);
      // this.setState({ error });
    }
  }

  /**
   * Handle focus event
   */
  handleFocus = () => {
    this.setState({
      error: false,
      focus: true,
    });
  }

  /**
   * Handle blur event
   */
  handleBlur = () => {
    this.setState({ focus: false });
  }

  /*
   * Render
   */
  render() {
    const { error, focus } = this.state;
    const {
      name, placeholder, value, type,
    } = this.props;
    const id = `field-${name}`;
    return (
      <div
        className={classNames(
          'field',
          { 'field--has-value': value !== '' },
          { 'field--has-error': error },
          { 'field--has-focus': focus },
        )}
      >
        <label
          className="field-label"
          htmlFor={id}
        >
          {placeholder}
        </label>
        <input
          type={type}
          className="field-input"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
