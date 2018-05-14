import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MyMarker from 'src/containers/Marker';

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
      {((props.places.length > 0)) && props.places.map(place =>
        <MyMarker key={place.id} {...place} />)}
    </GoogleMap>
  ));

class MyFancyComponent extends React.Component {
  state = {
    isMarkerShown: false,
    lat: 0,
    lng: 0,
    places: [],
  }

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
      /* eslint-disable-next-line */
      this.setState({ lat, lng });
    }
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true, places: this.props.places });
    }, 3000);
  }


  render() {
    return (
      <MyMapComponent
        lat={this.state.lat}
        lng={this.state.lng}
        isMarkerShown={this.state.isMarkerShown}
        places={this.state.places}
      />
    );
  }
}
MyFancyComponent.propTypes = {
  places: PropTypes.array.isRequired,
};
export default MyFancyComponent;
