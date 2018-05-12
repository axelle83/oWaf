
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
      place = {
        adress: action.data.adresse.address,
        lat: action.data.adresse.lat,
        lng: action.data.adresse.lng,
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
