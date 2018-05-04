/*
*  Npm Import
*/
import { connect } from 'react-redux';

/*
* Local Import
*/
import Nav from 'src/components/Nav';

/*
* Code
*/
const mapStateToProps = null;

const mapDispatchToProps = {};
// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

/*
* Export Default
*/
export default NavContainer;
