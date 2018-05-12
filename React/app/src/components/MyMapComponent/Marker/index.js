/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';

/*
 * Component
 */
const MyMarker = ({ lat, lng, adress }) => (
  <Marker
    position={{ lat, lng }}
        // onClick={onMarkerClick}
    icon="/images/blue_MarkerR.png"
    adress={adress}
    name="nom du lieu"
  />
);

/*
 * PropTypes
*/
MyMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  adress: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default MyMarker;
