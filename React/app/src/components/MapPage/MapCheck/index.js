/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */
export default class MapCheck extends React.Component {
  /*
   * Handle change event
   */
  handleChange = (evt) => {
    console.log(evt.target.checked);
    const { checked } = evt.target;
    this.props.onChange(checked);
  }

  /*
   * Render
   */
  render() {
    const { name, label } = this.props;
    const id = `mapField-${name}`;
    return (
      <div className="mapField check">
        <span className="mapField-label">
          {label}
        </span>
        <input
          type="checkbox"
          className="mapField-check"
          id={id}
          name={name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
/*
 * PropTypes
 */
MapCheck.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

MapCheck.defaultProps = {
  inputValue: '',
};
