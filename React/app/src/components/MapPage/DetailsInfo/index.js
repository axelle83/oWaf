/*
*  Npm Import
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
* Code
*/
const detailsInfo = ({ myPlace }) => (
  <div id="detailsInfo">
    <div className="mapField">
      <p className="details-label">Nom du lieu</p>
      <p className="details-data">{myPlace.name}</p>
    </div>
    <div className="mapField">
      <p className="details-label">Adresse du lieu</p>
      <p className="details-data">{myPlace.adress}</p>
    </div>
    <div className="mapField">
      <p className="details-label">Catégorie</p>
      <p className="details-data">{myPlace.category}</p>
    </div>
    <div className="mapField">
      <p className="details-label">Coordonnées GPS</p>
      <p className="details-label">Lat</p>
      <p className="details-data">{myPlace.lat}</p>
      <p className="details-label">Lng</p>
      <p className="details-data">{myPlace.lng}</p>
    </div>
    <div className="mapField">
      <p className="details-label">Commentaires</p>
      <p className="details-data">{myPlace.comment}</p>
    </div>
    <p className="check">
      <input
        className="details-check"
        type="checkbox"
        checked={myPlace.leash}
      />
      Laisse
    </p>
    <p className="check">
      <input
        className="details-check"
        type="checkbox"
        checked={myPlace.fountain}
      />
      Fontaine
    </p>
    <p className="check">
      <input
        className="details-check"
        type="checkbox"
        checked={myPlace.lake}
      />
      Lac à proximité
    </p>
    <p className="check">
      <input
        className="details-check"
        type="checkbox"
        checked={myPlace.bag}
      />
      Sac à déjections
    </p>
  </div>
);

/*
* PropTypes
*/
detailsInfo.propTypes = {
  myPlace: PropTypes.object.isRequired,
};
/*
* Export Default
*/
export default detailsInfo;
