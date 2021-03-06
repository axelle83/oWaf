/*
* Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/*
*  Code
 */
const Nav = ({ buttons }) => (
  <nav id="nav">
    <div id="nav-title">
      <h1 id="nav-h1">oWaf</h1>
      <p id="nav-p">La communauté qui a du chien !</p>
    </div>
    <div id="button">
      {Object.keys(buttons).map(button => (
        <NavLink
          // exact
          key={button}
          to={buttons[button].path}
          className="button-nav"
        >
          {button}
        </NavLink>
      ))}
    </div>
  </nav>
);

/*
* PropTypes
 */
Nav.propTypes = {
  buttons: PropTypes.object.isRequired,
};

/*
* Export default
 */
export default Nav;
