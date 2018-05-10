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
const detailsInfo = ({ lieu }) => (
  <div id="detailsInfo">

    <p className="detailsInfo-name">{ lieu.name }</p>
    <p className="detailsInfo-address">{ lieu.address }</p>
    <p className="detailsInfo-GPS">{ lieu.gps }</p>

    <p className="check"> Laisse <input
      className="details-laisse"
      type="checkbox"
      value=""
    />
    </p>
    <p className="check"> Fontaine <input
      className="details-fontaine"
      type="checkbox"
      value=""
    />
    </p>
    <p className="check"> Sac de déjection <input
      className="details-sac"
      type="checkbox"
      value=""
    />
    </p>
  </div>
);

detailsInfo.propTypes = {
  lieu: PropTypes.string.isRequired,
};
/*
* Export Default
*/
export default detailsInfo;
