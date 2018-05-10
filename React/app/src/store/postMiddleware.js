
import axios from 'axios';
import { GET_POST } from './reducers/post';

const postMiddleware = store => next => (action) => {
  switch (action.type) {
    case GET_POST: {
      const url = 'http://217.70.189.93/wp-json/wp/v2/posts/?per_page=3';
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };

      axios
        .get(url, config)
        .then((response) => {
          console.log(response.data);
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
export default postMiddleware;
