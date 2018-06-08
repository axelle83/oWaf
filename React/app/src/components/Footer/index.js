/*
* Npm import
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
      <NavLink
        key="home"
        to="/"
        className="footer-title"
      >
        Copyright <span id="footer-logo">oWaf</span> {year}
      </NavLink>
      <NavLink
        key="cgu"
        to="/cgu"
        className="footer-cgu"
      >
        Nos conditions d'utilisation
      </NavLink>
      <div className="footer-sociaux">
        <a href="https://www.oclock.io/"><i className="fab fa-facebook-f" /></a>
        <a href="https://www.oclock.io/"><i className="fab fa-twitter" /></a>
      </div>
    </footer>
  );
};

/*
* Export default
 */

export default Footer;
