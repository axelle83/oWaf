/**
* Import
*/
import axios from 'axios';
import { SUBSCRIBE_SUBMIT, subscribe } from './reducers/member';

/**
 * Code
 */

const url = '/wp-json/wp/v2/users';

const subscribeMiddleware = store => next => (action) => {
  switch (action.type) {
    case SUBSCRIBE_SUBMIT: {
      const state = store.getState();
      // On crée l'objet membre
      const member = {
        username: state.member.pseudo,
        city: state.member.city,
        email: state.member.email,
        password: state.member.password,
        'dog-name': state.member.dogName,
        'dog-birth': state.member.dogBirth,
        'dog-sex': state.member.dogSex,
        'dog-image': state.member.selectedFile,
      };
      console.log(member);
      axios
        .get(url)
        .then((response) => {
          console.log('ok', response);
          store.dispatch(subscribe());
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
export default subscribeMiddleware;
