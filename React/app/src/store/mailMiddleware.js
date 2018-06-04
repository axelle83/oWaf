/*
* Import
*/
import axios from 'axios';
import { CONTACT_SUBMIT, sendMessage } from './reducers/contact';

/*
 * Code
 */
const mailMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONTACT_SUBMIT: {
      const state = store.getState();
      const object = state.contact.object.trim();
      const message = state.contact.message.trim();
      const email = state.contact.email.trim();
      const url = 'http://217.70.189.93:4000/send';
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };

      axios
        .post(url, `email=${email}&object=${object}&message=${message}`, config)
        .then(() => {
        })
        .catch((error) => {
          console.log(error);
        });
      store.dispatch(sendMessage());
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
export const contactSubmit = () => ({
  type: CONTACT_SUBMIT,
});

export default mailMiddleware;
