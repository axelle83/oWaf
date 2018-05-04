
/**
 * Code
 */
import { SUBSCRIBE_SUBMIT } from './reducers/member';

const memberMiddleware = store => next => (action) => {
  switch (action.type) {
    case SUBSCRIBE_SUBMIT: {
      console.log('mb middleware');
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
