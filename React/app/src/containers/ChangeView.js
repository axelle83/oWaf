/*
 * Npm import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import ChangeView from 'src/components/ChangeView';
import { changeView } from 'src/store/reducers/login';
import datas from 'src/datas/subscribe';

/*
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  active: state.login.view === ownProps.from,
  data: datas[state.login.view],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeView: () => {
    dispatch(changeView(ownProps.to));
  },
});

/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(ChangeView);
