
import axios from 'axios';
import { LOAD_PLACE, getPlaces } from './reducers/map';

const mapMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_PLACE: {
      const urlMap = 'http://217.70.189.93/wp-json/wp/v2/lieu';
      const urlCategory = 'http://217.70.189.93/wp-json/wp/v2/categories';
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      // gets the places
      axios
        .get(urlMap, config)
        .then((response) => {
          response.data.map((data) => {
            axios
              .get(`${urlCategory}/${data.categories[0]}`, config)
              .then((res) => {
                data.categories[0] = res.data.name;
              });
            // adds the place to the state
            // store.dispatch(getPlaces(data));
            setTimeout(
              () => {
                console.log(data);
                store.dispatch(getPlaces(data));
              }
              , 500,
            );
          });
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
export default mapMiddleware;
