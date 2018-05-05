/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/*
 * Local import
 */


/*
 * Code
 */
class Disconnect extends React.Component {
  componentDidMount() {
    this.props.disconnect();
  }
  render() {
    // const { logged } = this.props;
    // console.log(logged);
    return <Redirect to="/" />;
  }
}
Disconnect.propTypes = {
  disconnect: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};
/*
 * Export default
 */
export default Disconnect;
