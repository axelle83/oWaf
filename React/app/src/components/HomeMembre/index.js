/*
*  Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
*  Code
 */
class HomeMembre extends React.Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    const {
      title1, category1, excerpt1, title2, category2, excerpt2, title3, category3, excerpt3,
    } = this.props;
    return (
      <div id="homeMembre">
        <div className="homeMembre-img" />
        <div className="homeMembre-text">Bienvenue Jean-machin et une caresse à Médore  </div>
        <div className="homeMembre-carte-title">Carte interactive</div>
        <div className="homeMembre-carte">
          <div className="homeMembre-carte-img" />
          <div className="homeMembre-carte-texte">Venez partager vos lieux de détente favoris et découvrir ceux des autres !</div>
        </div>
        <div className="home-blog">
          Discussions à la une
          <div className="home-blog-post">
            <div className="post">
              <p className="post-category">{category1}</p>
              <p className="post-title">{title1}</p>
              <p className="post-excerpt">{excerpt1}</p>
              <p className="post-more">En lire plus</p>
            </div>
            <div className="post">
              <p className="post-category">{category2}</p>
              <p className="post-title">{title2}</p>
              <p className="post-excerpt">{excerpt2}</p>
              <p className="post-more">En lire plus</p>
            </div>
            <div className="post">
              <p className="post-category">{category3}</p>
              <p className="post-title">{title3}</p>
              <p className="post-excerpt">{excerpt3}</p>
              <p className="post-more">En lire plus</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
HomeMembre.propTypes = {
  getPost: PropTypes.func.isRequired,
  title1: PropTypes.string.isRequired,
  category1: PropTypes.string.isRequired,
  excerpt1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  category2: PropTypes.string.isRequired,
  excerpt2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  category3: PropTypes.string.isRequired,
  excerpt3: PropTypes.string.isRequired,
};

/*
* Export default
 */

export default HomeMembre;
