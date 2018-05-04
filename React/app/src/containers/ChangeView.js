/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import ChangeView from 'src/components/ChangeView';
import { changeView } from 'src/store/reducers/loginForm';
import datas from 'src/datas/subscribe';

/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  active: state.loginForm.view === ownProps.from,
  data: datas[state.loginForm.view],
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeView: () => {
    dispatch(changeView(ownProps.to));
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChangeView);
