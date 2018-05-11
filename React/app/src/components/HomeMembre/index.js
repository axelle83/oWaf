/*
* npm install
*
 */
import React from 'react';
import PropTypes from 'prop-types';
// import { Route } from 'react-router-dom';


/*
* Local import
 */
/*
*  Code
 */
class HomeMembre extends React.Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    return (
      <div id="homeMembre">
        <div className="homeMembre-img" />
        <div className="homeMembre-text">Bienvenue Jean-machin et une caresse à Médore  </div>
        <div className="homeMembre-carte-title">Carte intéractive</div>
        <div className="homeMembre-carte">
          <div className="homeMembre-carte-img" />
          <div className="homeMembre-carte-texte">Venez partagez vos lieux de détente favoris et découvrir ceux des autres !</div>
        </div>
        <div className="homeMembre-blog">Discussions à la une</div>
        <div className="homeMembre-blog-article">articles</div>
      </div>
    );
  }
}
HomeMembre.propTypes = {
  getPost: PropTypes.func.isRequired,
};

/*
* Export default
 */

export default HomeMembre;
