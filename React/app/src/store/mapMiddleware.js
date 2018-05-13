
import axios from 'axios';
import { LOAD_PLACE, PLACE_SUBMIT, getPlaces, newPlace } from './reducers/map';

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
          /* eslint-disable-next-line */
          response.data.map((data) => {
            // gets the category
            axios
              .get(`${urlCategory}/${data.categories[0]}`, config)
              .then((res) => {
                data.categories[0] = res.data.name;
              });
            // adds the place to the state
            setTimeout(
              () => {
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

    case PLACE_SUBMIT: {
      const state = store.getState();
      const urlMap = 'http://217.70.189.93/wp-json/wp/v2/lieu';
      const admin = btoa('restapi:restapi');
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
        },
      };
      // gets the places
      axios
        .post(urlMap, {
          title: state.map.name,
          status: 'publish',
          commentaire: state.map.comment,
          adresse: {
            adress: state.map.adress,
            lat: state.map.lat,
            lng: state.map.lng,
          },
        }, config)
        .then((response) => {
          store.dispatch(newPlace());
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
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
export default mapMiddleware;
