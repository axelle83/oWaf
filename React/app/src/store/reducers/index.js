/*
 * Import NPM
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import chatForm from 'src/store/reducers/chatForm';
import buttons from 'src/store/reducers/buttons';
import chatMessages from 'src/store/reducers/chatMessages';

/*
 * Code
 */
const reducers = combineReducers({
  chatForm,
  buttons,
  chatMessages,
});

/*
 * Export
 */
export default reducers;
