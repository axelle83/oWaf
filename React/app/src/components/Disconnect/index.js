/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/*
 * Code
 */
class Disconnect extends React.Component {
  componentDidMount() {
    this.props.disconnect();
  }
  render() {
    return <Redirect to="/" />;
  }
}

/*
 * PropTypes
 */
Disconnect.propTypes = {
  disconnect: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default Disconnect;
