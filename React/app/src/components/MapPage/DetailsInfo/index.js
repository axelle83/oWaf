/*
*  Npm Import
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
* Local Import
*/


/*
* Code
*/
const detailsInfo = ({ myPlace }) => (
  <div id="detailsInfo">
    <p className="detailsInfo-name">Nom : {myPlace.name}</p>
    <p className="detailsInfo-address">Adresse : {myPlace.adress}</p>
    <p className="detailsInfo-address">Type : {myPlace.category}</p>
    <p className="detailsInfo-GPS">
      <p>
        lat : {myPlace.lat}
      </p>
      <p>
        lng : {myPlace.lng}
      </p>
    </p>

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
    <p className="check"> Sac à déjection <input
      className="details-bag"
      type="checkbox"
      checked={myPlace.bag}
    />
    </p>
  </div>
);

detailsInfo.propTypes = {
  myPlace: PropTypes.object.isRequired,
};
/*
* Export Default
*/
export default detailsInfo;
