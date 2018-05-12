/**
* Import
*/
import axios from 'axios';
import { LOGIN_SUBMIT, PASS_SUBMIT, connect, sendPass, userError } from './reducers/login';
import { getMember } from './reducers/member';

/**
 * Code
 */
const urlUser = 'http://217.70.189.93/wp-json/wp/v2/users';
const urlUserMe = 'http://217.70.189.93/wp-json/wp/v2/users/me';
const urlPass = 'http://localhost:4000/pass';

const loginMiddleware = store => next => (action) => {
  switch (action.type) {
    // login : asks the rest api to check if user+password is correct (base64)
    case LOGIN_SUBMIT: {
      const state = store.getState();
      const user = btoa(`${state.login.pseudo}:${state.login.password}`);
      const config = {
        headers: { Authorization: `Basic ${user}` },
      };
      axios
        .get(urlUserMe, config)
        // an user exists with this password : let's connect
        .then((response) => {
          console.log(response.data);
          store.dispatch(connect());
          store.dispatch(getMember(response.data));
        })
        // else displays an error message
        .catch(() => {
          store.dispatch(userError());
        });
      break;
    }

    // forgot password
    case PASS_SUBMIT: {
      let state = store.getState();
      const email = state.login.email.trim();
      const urlMail = `${urlUser}/?search=${email}`;
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      const admin = btoa('restapi:restapi');
      const newConfig = {
        headers: { Authorization: `Basic ${admin}` },
      };
      axios
        .get(urlMail, config)
        // there is a user with this email
        .then((response) => {
          // new password generating
          const password = Math.random().toString(36).substr(2, 9);
          if (response.data.length > 0) {
            // gets the user id and adds to the url
            store.dispatch(getMember(response.data));
            state = store.getState();
            const urlId = `${urlUser}/${state.member.id}`;
            // sends the new password into the databse
            axios
              .post(urlId, { password }, newConfig)
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
            // sends the new password by email
            axios
              .post(urlPass, `email=${email}&password=${password}`, config)
              .then(() => {
                console.log('ok');
              })
              .catch((error) => {
                console.log(error);
              });
            store.dispatch(sendPass());
          }
          else {
            // there is no user : displays an error message
            store.dispatch(userError());
          }
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
