/*
*  Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';

/*
*  Code
 */
class HomeMembre extends React.Component {
  componentDidMount() {
    this.props.loadPost();
  }

  render() {
    const {
      title1, category1, excerpt1, slug1,
      title2, category2, excerpt2, slug2,
      title3, category3, excerpt3, slug3,
      name, dogName, logged,
    } = this.props;
    if (window.location.pathname === '/membre' && !logged) return <Redirect to="/" />;
    const blog1 = `/blog/${slug1}/`;
    const blog2 = `/blog/${slug2}/`;
    const blog3 = `/blog/${slug3}/`;
    return (
      <div id="homeMembre">
        {/* <div className="homeMembre-img" /> */}
        <div className="homeMembre-text">Bienvenue {name} et {dogName} </div>
        <div className="homeMembre-carte-title">Carte interactive</div>
        <NavLink
          key="map"
          to="/map"
          className="homeMembre-carte"
        >
          <div className="homeMembre-carte-img" />
          <div className="homeMembre-carte-texte">Venez partager <br />vos lieux de détente favoris <br /> et découvrir ceux des autres !</div>
        </NavLink>
        <a href="/blog" className="home-blog">
          <p className="home-blog-title">Discussions à la une</p>
          <div className="home-blog-post">
            <div className="post">
              <p className="post-category">{category1}</p>
              <p className="post-title">{title1}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt1 }} />
              <a href={blog1}>
                <p className="post-more">En lire plus</p>
              </a>
            </div>
            <div className="post">
              <p className="post-category">{category2}</p>
              <p className="post-title">{title2}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt2 }} />
              <a href={blog2}>
                <p className="post-more">En lire plus</p>
              </a>
            </div>
            <div className="post">
              <p className="post-category">{category3}</p>
              <p className="post-title">{title3}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt3 }} />
              <a href={blog3}>
                <p className="post-more">En lire plus</p>
              </a>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

/*
* Export default
*/
HomeMembre.propTypes = {
  loadPost: PropTypes.func.isRequired,
  title1: PropTypes.string.isRequired,
  category1: PropTypes.string.isRequired,
  excerpt1: PropTypes.string.isRequired,
  slug1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  category2: PropTypes.string.isRequired,
  excerpt2: PropTypes.string.isRequired,
  slug2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  category3: PropTypes.string.isRequired,
  excerpt3: PropTypes.string.isRequired,
  slug3: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  dogName: PropTypes.string.isRequired,
};

/*
* Export default
 */
export default HomeMembre;
