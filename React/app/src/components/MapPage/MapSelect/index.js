/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */
class MapSelect extends React.Component {
  /**
   * Handle change event
   */
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);
  }

  /*
   * Render
   */
  render() {
    const { name, categories } = this.props;
    return (
      <select name={name} id="mapSelect" onChange={this.handleChange}>
        {categories.map((category, key) =>
          <option key={category.label} value={key}>{category.label}</option>)}
      </select>
    );
  }
}

/*
 * PropTypes
 */
MapSelect.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default MapSelect;
