
/*
 * Types
 */
export const LOAD_PLACE = 'LOAD_PLACE';
export const GET_PLACE = 'GET_PLACE';

/*
 * State
 */
const initialState = {
  places: [],
};
let place = {};
let leash = false;
let fountain = false;
let bag = false;
let lake = false;

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // gets the posts from the rest api
    case LOAD_PLACE:
      return {
        ...state,
      };

    // gets the values returned by the rest api
    case GET_PLACE:
      leash = (action.data.details.indexOf('Laisse') >= 0);
      fountain = (action.data.details.indexOf('Fontaine') >= 0);
      bag = (action.data.details.indexOf('Sacs de déjections canines') >= 0);
      lake = (action.data.details.indexOf('lac à proximité') >= 0);
      place = {
        adress: action.data.adresse.address,
        name: action.data.title.rendered,
        category: action.data.categories[0],
        lat: Number(action.data.adresse.lat),
        lng: Number(action.data.adresse.lng),
        leash,
        fountain,
        bag,
        lake,
      };
      return {
        ...state,
        places: [...state.places, place],
      };

    // default case
    default:
      return state;
  }
};

/*
 * Action creators
 */
export const loadPlace = () => ({
  type: LOAD_PLACE,
});
export const getPlaces = data => ({
  type: GET_PLACE,
  data,
});

/*
 * Export default
 */
export default reducer;
