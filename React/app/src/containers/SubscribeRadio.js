/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
 * Local import
 */
import SubscribeRadio from 'src/components/SubscribeRadio';
import { changeInput } from 'src/store/reducers/member';

/*
 * Code
 */
const mapStateToProps = state => ({
  selectedOption: state.member['dog-sex'],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeInput({ name: ownProps.name, value }));
  },
});

const SubscribeRadioContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeRadio);

/*
 * Export default
 */
export default withRouter(SubscribeRadioContainer);
