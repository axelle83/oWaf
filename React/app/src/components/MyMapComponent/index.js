import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?keyAIzaSyB8KfvLpBdTKiBps38oaVMacZR9kwKR32o.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props =>
  (<GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 46.00, lng: 2.00 }}
  >
    {props.isMarkerShown &&
      <Marker position={{ lat: 43.50, lng: 7 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
  ));
  // On teste tout d'abord si le navigateur prend en charge la géolocalisation HTML5
if (navigator.geolocation) {
  const watchId = navigator.geolocation.watchPosition(
    successCallback,
    null,
    { enableHighAccuracy: true },
  );
}
else {
  alert("Votre navigateur n'est pas compatible avec la géolocalisation HTML 5");
}
function successCallback(position) {
  map.panTo(new google.maps.Latlng(position.coords.latitude, position.coords.longitude));
  const marker = new google.maps.Marker({
    position: new google.maps.Latlng(position.coords.latitude, position.coords.longitude),
    map,
  });
}
class MyFancyComponent extends React.Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MyMapComponent;
