/*
*  Npm Import
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
* Local Import
*/
import MyMapComponent from 'src/containers/MyMapComponent';
import Details from './Details/';
import DetailsInfo from './DetailsInfo';


/*
* Code
*/
class MapPage extends React.Component {
  static propTypes = {
    // inputValue: PropTypes.string.isRequired,
    // actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    loadPlace: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.loadPlace();
  }

  handleChange = (evt) => {
    // Je recup la value depuis la cible de l'event
    const { value } = evt.target;
    // j'exécute la fonction fournie en passant la value
    this.props.actions.changeInputForm(value);
  }

  handleSubmit = (evt) => {
    // J'empeche le comportement par défaut
    evt.preventDefault();
    // J'exécute la fonction fournie par les props
    this.props.actions.sendMessage();
  }

  render() {
    const { inputValue } = this.props;
    return (
      <form id="map" onSubmit={this.handleSubmit}>
        <h1 className="map-title">La carte !</h1>
        <input
          className="map-addPlace"
          type="text"
          placeholder="votre lieu"
          value={inputValue}
          onChange={this.handleChange}
        />
        <div className="map-image"><MyMapComponent /></div>
        <div className="map-icon">
          <ul className="map-table">
            <li><img src="images/blue_MarkerR.png" alt="img marker" width="20" height="25" />Restaurant </li>
            <li><img src="images/darkgreen_MarkerB.png" alt="img marker" width="20" height="25" />Balade</li>
            <li><img src="images/red_MarkerH.png" alt="img marker" width="20" height="25" />Hôtel</li>
            <li><img src="images/yellow_MarkerP.png" alt="img marker" width="20" height="25" />Plage</li>
          </ul>
        </div>
        <div> <Details /> </div>
        {/* <div> <DetailsInfo /> </div> */}
      </form>
    );
  }
}


/*
* Export Default
*/
export default MapPage;
