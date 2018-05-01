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
  (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {props.isMarkerShown &&
      <Marker position={{ lat: 43.12, lng: 6.12, title: 'coucou' }} onClick={props.onMarkerClick} />}
    </GoogleMap>
  ));

class MyFancyComponent extends React.Component {
  state = {
    isMarkerShown: false,
    lat: 0,
    lng: 0,
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      // coords de géolocalisation
      navigator.geolocation.getCurrentPosition(position => {
        const crd = position.coords;
        const lat = crd.latitude;
        const lng = crd.longitude;
        this.setState({ lat, lng });
      });
    }
    else {
      // coords de Paris
      const lat = 48.8534;
      const lng = 2.3488;
      this.setState({ lat, lng });
    }
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
        lat={this.state.lat}
        lng={this.state.lng}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MyFancyComponent;
