/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';

/*
 * Component
 */
class MyMarker extends React.Component {
  onMarkerClick = () => {
    this.props.getMyPlace(this.props);
  }

  render() {
    const colorMarker = {
      Balade: '/images/darkgreen_MarkerB.png',
      Restaurant: '/images/blue_MarkerR.png',
      plage: '/images/yellow_MarkerP.png',
      Hôtel: '/images/red_MarkerH.png',
    };
    const {
      lat, lng, adress, name, category,
    } = this.props;
    return (
      <Marker
        position={{ lat, lng }}
        onClick={this.onMarkerClick}
        icon={colorMarker[category]}
        adress={adress}
        name={name}
        category={category}
      />
    );
  }
}

/*
 * PropTypes
*/
MyMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  adress: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  getMyPlace: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default MyMarker;
