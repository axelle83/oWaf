/**
* Import
*/
import axios from 'axios';
import { LOGIN_SUBMIT, PASS_SUBMIT, connect, sendPass } from './reducers/login';

/**
 * Code
 */

const url = 'https://demo.wp-api.org/wp-json/wp/v2/posts';
// const url = '/wp-json/wp/v2/users';
const urlPass = 'http://localhost:4000/pass';

const loginMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOGIN_SUBMIT: {
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      axios
        .get(url, config)
        .then((response) => {
          console.log('ok', response);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.log('ko', error);
        });
      break;
    }
    case PASS_SUBMIT: {
      const state = store.getState();
      const email = state.login.email.trim();
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      const password = Math.random().toString(36).substr(2, 9);
      axios
        .post(urlPass, `email=${email}&password=${password}`, config)
        .then(() => {
          console.log('ok');
          store.dispatch(sendPass());
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;

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
