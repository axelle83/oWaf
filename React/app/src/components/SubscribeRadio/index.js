/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */
export default class SubscribeRadio extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedOption: PropTypes.string,
  }
  static defaultProps = {
    selectedOption: 'femelle',
  }
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
    const {
      selectedOption, name,
    } = this.props;
    return (
      <div className="subscribe-dog-sex">
        <label className="subscribe-dog-sex-label">
          <input
            name={name}
            type="radio"
            value="femelle"
            checked={selectedOption === 'femelle'}
            onChange={this.handleChange}
          />
        Femelle
        </label>
        <label className="subscribe-dog-sex-label">
          <input
            name={name}
            type="radio"
            value="mâle"
            checked={selectedOption === 'mâle'}
            onChange={this.handleChange}
          />
          Mâle
        </label>
      </div>
    );
  }
}
