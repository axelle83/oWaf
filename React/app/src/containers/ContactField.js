/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import ContactField from 'src/components/ContactField';
import { changeContact } from 'src/store/reducers/contact';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeContact({ name: ownProps.name, value }));
  },
});

const ContactFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactField);

/*
 * Export default
 */
export default withRouter(ContactFieldContainer);
