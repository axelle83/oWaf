/*
* npm install
*
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/*
*  Code
 */
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer id="footer">
      <a className="footer-title" title="owaf" href="/home">Copyright <span id="footer-logo">oWaf</span> {year}</a>
      <NavLink
        key="cgu"
        to="/cgu"
        className="footer-cgu"
      >
        Nos conditions d'utilisation
      </NavLink>
      {/* <a className="footer-cgu" title="nos cgu" href="/cgu">Nos conditions d'utilisation</a> */}
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
