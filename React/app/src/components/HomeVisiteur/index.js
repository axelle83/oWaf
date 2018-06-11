/*
*  Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
/*
*  Code
 */
class HomeVisiteur extends React.Component {
  componentDidMount() {
    this.props.loadPost();
  }

  render() {
    const { logged } = this.props;
    if (logged) return <Redirect to="/member" />;
    const {
      title1, category1, excerpt1, title2, category2, excerpt2, title3, category3, excerpt3,
    } = this.props;
    return (
      <div id="homeVisiteur">
        <div className="visiteur-img">
          <div className="visiteur-text-img">Vous êtes propriétaire de chien et vous voulez partager des lieux dogfriendly </div>
        </div>
        <div className="visiteur-img2">
          <div className="visiteur-img2-text">
            <p>Vous partez en déplacement <br />et vous ne savez pas où détendre votre chien ?</p>
            <div className="visiteur-img2-text-upper">Restez zen la communauté oWaf est là pour vous...</div>
          </div>
          <div className="visiteur-img2-img" />
        </div>
        <div className="visiteur-carte">
          <div className="visiteur-carte-img" />
          <div className="visiteur-carte-text">Grâce à une carte interactive <br />venez partager vos lieux de détente favoris <br />et découvrir ceux des autres !
          </div>
        </div>
        <div className="wrapper">
          <div className="one ball" />
          <div className="two ball" />
          <div className="three ball" />
          <div className="four ball" />
        </div>
        <div className="home-blog">
          <p className="home-blog-title">Articles à la une</p>
          <div className="home-blog-post">
            <div className="post">
              <p className="post-category">{category1}</p>
              <p className="post-title">{title1}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt1 }} />
            </div>
            <div className="post">
              <p className="post-category">{category2}</p>
              <p className="post-title">{title2}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt2 }} />
            </div>
            <div className="post">
              <p className="post-category">{category3}</p>
              <p className="post-title">{title3}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt3 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
* PropTypes
 */
HomeVisiteur.propTypes = {
  loadPost: PropTypes.func.isRequired,
  title1: PropTypes.string.isRequired,
  category1: PropTypes.string.isRequired,
  excerpt1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  category2: PropTypes.string.isRequired,
  excerpt2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  category3: PropTypes.string.isRequired,
  excerpt3: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
};

/*
* Export default
 */
export default HomeVisiteur;
