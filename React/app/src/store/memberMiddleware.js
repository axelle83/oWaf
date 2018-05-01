
/**
 * Code
 */
import { SUBSCRIBE_SUBMIT } from './reducers/memberForm';

const memberMiddleware = store => next => (action) => {
  switch (action.type) {
    case SUBSCRIBE_SUBMIT: {
      console.log('test');
      // const state = store.getState();
      // ID
      // lastId += 1;

      // On crée l'objet membre
    //   const member = {
    //     username: state.memberForm.pseudo,
    //     city: state.memberForm.city,
    //     email: state.memberForm.email,
    //     password: state.memberForm.password,
    //   };
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
export default memberMiddleware;
