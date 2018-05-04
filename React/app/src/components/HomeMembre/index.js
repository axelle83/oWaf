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
const HomeMembre = () => (
  <div id="homeMembre">


    <div className="homeMembre-img" />
    <div className="homeMembre-text">Bienvenue JeanMachin et une caresse à Médore </div>

    <div className="homeMembre-carte-title">Carte intéractive</div>
    <div className="homeMembre-carte">
      <div className="homeMembre-carte-img" />
      <div className="homeMembre-carte-texte">Venez partagez vos lieux de détente favoris et découvrir ceux des autres !</div>
    </div>

    <div className="homeMembre-blog">Discussions à la une</div>
    <div className="homeMembre-blog-article">articles</div>


  </div>
);

/*
* Export default
 */

export default HomeMembre;
