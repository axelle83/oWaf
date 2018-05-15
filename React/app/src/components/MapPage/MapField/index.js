/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
 * Component
 */
export default class MapField extends React.Component {
  state = {
    error: false,
  }

  /**
   * Handle change event
   */
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);
    // check mandatory fields
    if (this.props.mandatory === true) {
      const error = !value;
      this.setState({ error });
    }
  }

  /*
   * Render
   */
  render() {
    const { error } = this.state;
    const {
      name, placeholder, inputValue, type, mandatory,
    } = this.props;
    const id = `mapField-${name}`;
    return (
      <div
        className={classNames(
          'mapField',
          { 'mapField--has-error': error },
        )}
      >
        <input
          type={type}
          className="mapField-input"
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={this.handleChange}
          required={mandatory}
        />
        {mandatory && '*'}
      </div>
    );
  }
}

/*
 * PropTypes
 */
MapField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mandatory: PropTypes.bool.isRequired,
  inputValue: PropTypes.string,
  type: PropTypes.oneOf(['text', 'textarea', 'number']).isRequired,
};

MapField.defaultProps = {
  inputValue: '',
};
