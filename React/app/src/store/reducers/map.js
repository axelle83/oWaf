
/*
 * Types
 */
export const LOAD_PLACE = 'LOAD_PLACE';
export const GET_PLACE = 'GET_PLACE';
export const GET_MY_PLACE = 'GET_MY_PLACE';

/*
 * State
 */
const initialState = {
  places: [],
  myPlace: {},
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

    // puts the data of the marker clicked in the state
    case GET_MY_PLACE:
      return {
        ...state,
        myPlace: {
          name: action.data.name,
          category: action.data.category,
          adress: action.data.adress,
          lat: action.data.lat,
          lng: action.data.lng,
          bag: action.data.bag,
          fountain: action.data.fountain,
          lake: action.data.lake,
          leash: action.data.leash,
        },
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
export const getMyPlace = data => ({
  type: GET_MY_PLACE,
  data,
});

/*
 * Export default
 */
export default reducer;
