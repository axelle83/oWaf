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
      <p className="detailsInfo-label">Nom du lieu</p>
      <p className="detailsInfo-data">{myPlace.name}</p>
    </div>
    <div className="mapField">
      <p className="detailsInfo-label">Adresse du lieu</p>
      <p className="detailsInfo-data">{myPlace.adress}</p>
    </div>
    <div className="mapField">
      <p className="detailsInfo-label">Catégorie</p>
      <p className="detailsInfo-data">{myPlace.category}</p>
    </div>
    <div className="mapField">
      <p className="detailsInfo-label">Coordonnées GPS</p>
      <p className="detailsInfo-label">Lat</p>
      <p className="detailsInfo-data">{myPlace.lat}</p>
      <p className="detailsInfo-label">Lng</p>
      <p className="detailsInfo-data">{myPlace.lng}</p>
    </div>
    <div className="mapField">
      <p className="detailsInfo-label">Commentaires</p>
      <p className="detailsInfo-data">{myPlace.comment}</p>
    </div>
    <p className="check"> Laisse <input
      className="details-leash"
      type="checkbox"
      checked={myPlace.leash}
    />
    </p>
    <p className="check"> Fontaine <input
      className="details-fountain"
      type="checkbox"
      checked={myPlace.fountain}
    />
    </p>
    <p className="check"> Lac à proximité <input
      className="details-lake"
      type="checkbox"
      checked={myPlace.lake}
    />
    </p>
    <p className="check"> Sac à déjections <input
      className="details-bag"
      type="checkbox"
      checked={myPlace.bag}
    />
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
