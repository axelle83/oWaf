import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'react-google-maps';

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>Map will go here</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB8KfvLpBdTKiBps38oaVMacZR9kwKR32o'),
})(MapContainer);
