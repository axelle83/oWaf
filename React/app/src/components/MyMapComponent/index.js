import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import datas from 'src/datas';
// import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';


const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVQtHXYY_yzzutflzsTmGc6DcRg6TLhB4&v=3.exp&libraries=geometry,drawing,places',
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
      <Marker position={{ lat: 48.85, lng: 2.34 }} onClick={props.onMarkerClick} labelAnchor={new google.maps.Point(0, 0)} icon="/images/blue_MarkerR.png" title={datas.marker[0].title} name="nom du lieu" />
    </GoogleMap>
  ));

class MyFancyComponent extends React.Component {
  state = {
    isMarkerShown: false,
    lat: 0,
    lng: 0,
  }
  // eslint disable
  componentDidMount() {
    if ('geolocation' in navigator) {
      // coords de géolocalisation
      navigator.geolocation.getCurrentPosition((position) => {
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


  render() {
    return (
      <MyMapComponent
        lat={this.state.lat}
        lng={this.state.lng}
        isMarkerShown={this.state.isMarkerShown}
      />
    );
  }
}

export default MyFancyComponent;
