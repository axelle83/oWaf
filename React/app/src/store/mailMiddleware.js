
import axios from 'axios';
import { CONTACT_SUBMIT } from './reducers/contact';

const mailMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONTACT_SUBMIT: {
      const state = store.getState();
      const object = state.contact.object.trim();
      const main = state.contact.main.trim();
      axios
        .post('http://localhost/4000/')
        .then((response) => {
          console.log(response);
        });
    }
      break;

    default:
      break;
  }

  // Passe au suivant
  next(action);
};

export const contactSubmit = () => ({
  type: CONTACT_SUBMIT,
});

/**
 * Export
 */
export default mailMiddleware;
