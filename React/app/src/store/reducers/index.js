/*
 * Npm import
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import chatForm from 'src/store/reducers/chatForm';
import buttons from 'src/store/reducers/buttons';
import chatMessages from 'src/store/reducers/chatMessages';
import member from 'src/store/reducers/member';
import login from 'src/store/reducers/login';
import contact from 'src/store/reducers/contact';
import post from 'src/store/reducers/post';
import map from 'src/store/reducers/map';

/*
 * Code
 */
const reducers = combineReducers({
  chatForm,
  buttons,
  chatMessages,
  member,
  login,
  contact,
  post,
  map,
});

/*
 * Export
 */
export default reducers;
