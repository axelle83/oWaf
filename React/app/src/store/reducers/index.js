/*
 * Import NPM
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import chatForm from 'src/store/reducers/chatForm';
import chatBtn from 'src/store/reducers/chatBtn';
import chatMessages from 'src/store/reducers/chatMessages';

/*
 * Code
 */
const reducers = combineReducers({
  chatForm,
  chatBtn,
  chatMessages,
});

/*
 * Export
 */
export default reducers;
