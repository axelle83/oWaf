/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      <div className="subscribe-dog-gender">
        {/* labels only in profile view, not in subscribe view */}
        {window.location.pathname === '/profile' && 'Genre'}
        {/* <label className="subscribe-dog-gender-label">
          <input
            name={name}
            type="radio"
            value="femelle"
            checked={selectedOption === 'femelle'}
            onChange={this.handleChange}
          />
        Femelle
        </label> */}
        <input
          className={classNames(
            'subscribe-dog-gender-input',
            { 'subscribe-dog-gender-first': window.location.pathname === '/profile' },
          )}
          name={name}
          type="radio"
          value="femelle"
          checked={selectedOption === 'femelle'}
          onChange={this.handleChange}
        />
        <label className="subscribe-dog-gender-label">
          Femelle
        </label>
        <input
          className="subscribe-dog-gender-input"
          name={name}
          type="radio"
          value="mâle"
          checked={selectedOption === 'mâle'}
          onChange={this.handleChange}
        />
        <label className="subscribe-dog-gender-label">
          Mâle
        </label>
      </div>
    );
  }
}
