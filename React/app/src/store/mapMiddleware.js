
import axios from 'axios';
import { LOAD_PLACE, PLACE_SUBMIT, getPlaces, newPlace, getCategories } from './reducers/map';

const mapMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_PLACE: {
      const urlMap = 'http://217.70.189.93/wp-json/wp/v2/lieu';
      const urlCategory = 'http://217.70.189.93/wp-json/wp/v2/categories';
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      const categories = [];
      // gets the categories
      axios
        .get(urlCategory, config)
        .then((response) => {
          // gets the category
          for (let i = 0; i < response.data.length; i += 1) {
            categories[response.data[i].id] = {
              label: response.data[i].name,
            };
          }
          store.dispatch(getCategories(categories));
        });
      // gets the places
      axios
        .get(urlMap, config)
        .then((response) => {
          /* eslint-disable-next-line */
          response.data.map((data) => {
            // gets the lat & lng from the adress
            const adress = JSON.stringify(data.adresse);
            if (adress) {
              axios
                .get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAzMBKPPyaM0-z_VOq4NzIP9QcPcUihAuc&address=%${adress}&sensor=false`)
                .then((res) => {
                  data.lat = res.data.results[0].geometry.location.lat;
                  data.lng = res.data.results[0].geometry.location.lng;
                });
            }
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
      // adds the place
      const details = [
        state.map.leach && 'Laisse',
        state.map.fountain && 'Fontaine',
        state.map.lake && 'lac à proximité',
        state.map.bag && 'Sacs de déjections canines',
      ];
      const myNewPlace = {
        title: state.map.name,
        status: 'publish',
        commentaire: state.map.comment,
        adresse: state.map.adress,
        categories: state.map.category,
        details,
      };
      axios
        .post(urlMap, myNewPlace, config)
        .then((response) => {
          store.dispatch(newPlace(response.data));
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
