/**
* Import
*/
import axios from 'axios';
import { LOGIN_SUBMIT, connect } from './reducers/login';

/**
 * Code
 */

const url = '/wp-json/wp/v2/users';

const loginMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOGIN_SUBMIT: {
      axios
        .get(url)
        .then((response) => {
          console.log('ok', response);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.log('ko', error);
        });
      break;
    }

    default:
      break;
  }

  // Passe au suivant
  next(action);
};

/**
 * Export
 */
export default loginMiddleware;
