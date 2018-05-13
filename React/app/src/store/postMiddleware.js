
import axios from 'axios';
import { LOAD_POST, getPost } from './reducers/post';

const postMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_POST: {
      const urlPost = 'http://217.70.189.93/wp-json/wp/v2/posts/?per_page=3';
      const urlCategory = 'http://217.70.189.93/wp-json/wp/v2/categories';
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      // gets the 3 latest posts
      axios
        .get(urlPost, config)
        .then((response) => {
          // gets the category label for the first category of each post
          for (let i = 0; i < 3; i += 1) {
            axios
              .get(`${urlCategory}/${response.data[i].categories[0]}`, config)
              .then((res) => {
                response.data[i].categories[0] = res.data.name;
              });
          }
          // waits until the axios requets is finished before dispatch
          setTimeout(
            () => {
              store.dispatch(getPost(response.data));
            }
            , 500,
          );
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
