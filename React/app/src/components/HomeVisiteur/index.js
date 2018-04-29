/*
* npm install
*
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import { Route } from 'react-router-dom';


/*
* Local import
 */

/*
*  Code
 */
const HomeVisiteur = () => (
  <div id="homeVisiteur">

    <div className="visiteur-img" />
    <div className="visiteur-text-img">Vous êtes propriétaire de chien et vous voulez partager des lieux dogfriendly</div>

    <div className="visiteur-carte">
      <div className="visiteur-carte-img" />
      <div className="visiteur-carte-text">Venez partager vos lieux de détente favoris et découvrir ceux des autres ! </div>
    </div>

    <div className="visiteur-img2">
      <div className="visiteur-img2-text">Vous partez en déplacement et vous ne savez pas ou détendre votre chien ? Restez zen la communauté oWaf est là pour vous...</div>
      <div className="visiteur-img2-img" />
    </div>

    <div className="visiteur-articles">Article à la une</div>

  </div>
);

/*
* Export default
 */

export default HomeVisiteur;
