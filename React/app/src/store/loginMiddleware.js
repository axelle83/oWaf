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
    // login : demande d'autorisation pseudo:password en base64
    case LOGIN_SUBMIT: {
      const state = store.getState();
      const user = btoa(`${state.login.pseudo}:${state.login.password}`);
      const config = {
        headers: { Authorization: `Basic ${user}` },
      };
      axios
        .get(urlUserMe, config)
        // il existe un user avec ce mdp : on connecte
        .then((response) => {
          store.dispatch(connect());
          store.dispatch(getMember(response.data));
        })
        // sinon on affiche un message d'erreur
        .catch(() => {
          store.dispatch(userError());
        });
      break;
    }

    // mot de passe oublié
    case PASS_SUBMIT: {
      const state = store.getState();
      const email = state.login.email.trim();
      const urlMail = `${urlUser}/?search=${email}`;
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      // nouveau mot de passe
      const password = Math.random().toString(36).substr(2, 9);
      axios
        .get(urlMail, config)
        // il existe un user avec ce mail : on regénère un mdp
        .then((response) => {
          if (response.data.length > 0) {
            // envoi du mdp par mail
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
            // il n'existe pas d'utilisateur correspondant : on affiche un message d'erreur
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
