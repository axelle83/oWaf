/*
* npm install
*
 */
import React from 'react';
// import PropTypes from 'prop-types';


/*
* Local import
 */

/*
*  Code
 */
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer id="footer">
      <a className="footer-title" title="owaf" href="/home">&copy; oWaf -{year}</a>
      <a className="footer-cgu" title="nos cgu" href="/cgu">Nos conditions d'utilisation</a>
      <a className="footer-contact"title="contact" href="contact">Contactez-nous</a>
      <div className="footer-sociaux">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
      </div>
    </footer>
  );
};

/*
* Export default
 */

export default Footer;
