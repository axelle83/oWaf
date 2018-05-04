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
  // state = {
  //   logged: true,
  // }
  componentDidMount() {
    this.props.disconnect();
  }
  render() {
    // const { logged } = this.props;
    // if (logged) {
    //   return <Redirect to="/" />;
    // }
    // console.log(logged);
    return <Redirect to="/" />;
  }
}
Disconnect.propTypes = {
  disconnect: PropTypes.func.isRequired,
  // logged: PropTypes.bool.isRequired,
};
/*
 * Export default
 */
export default Disconnect;
