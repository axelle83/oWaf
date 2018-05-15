/*
*  Npm Import
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FaPlus from 'react-icons/lib/fa/plus-circle';

/*
* Local Import
*/
import MyMapComponent from 'src/containers/MyMapComponent';
import DetailsInfo from 'src/containers/DetailsInfo';
import Details from 'src/containers/Details';


/*
* Code
*/
class MapPage extends React.Component {
  // state = {
  //   addOpen: false,
  // }

  componentDidMount() {
    this.props.loadPlace();
  }

  handleClick = () => {
    this.props.addForm();
  }

  render() {
    const { logged, add } = this.props;
    // if (window.location.pathname === '/map' && !logged) return <Redirect to="/" />;
    return (
      <div id="map">
        {/* <h1 className="map-title">La carte !</h1> */}
        <div className="map-image">
          <div className="map-google"><MyMapComponent /></div>
          <div className="map-icon">
            <ul className="map-table">
              <li><img src="images/darkgreen_MarkerB.png" alt="img marker" width="20" height="25" />Balade</li>
              <li><img src="images/yellow_MarkerP.png" alt="img marker" width="20" height="25" />Plage</li>
              <li><img src="images/blue_MarkerR.png" alt="img marker" width="20" height="25" />Rest. </li>
              <li><img src="images/red_MarkerH.png" alt="img marker" width="20" height="25" />Hôtel</li>
            </ul>
          </div>
        </div>
        <div id="map-details">
          {/* <div className="details"> */}
          <div className="details-title">Cliquer sur un marqueur pour afficher les détails du lieu</div>
          {/* </div>
          <div className="details"> */}
          <div className="details-title">
            Ajouter un lieu
            <FaPlus id="place-add" onClick={this.handleClick} />
          </div>
          {/* </div> */}
        </div>
        {!add &&
          <div className="details-infos"><DetailsInfo /></div>}
        {add &&
          <div className="details-infos"><Details /></div>}
      </div>
    );
  }
}

MapPage.propTypes = {
  loadPlace: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  add: PropTypes.bool.isRequired,
  addForm: PropTypes.func.isRequired,
};

/*
* Export Default
*/
export default MapPage;
