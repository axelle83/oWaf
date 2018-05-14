
/*
 * Types
 */
export const LOAD_PLACE = 'LOAD_PLACE';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PLACE = 'GET_PLACE';
export const GET_MY_PLACE = 'GET_MY_PLACE';
export const INPUT_MAP_CHANGE = 'INPUT_MAP_CHANGE';
export const PLACE_SUBMIT = 'PLACE_SUBMIT';
const NEW_PLACE = 'NEW_PLACE';

/*
 * State
 */
const initialState = {
  places: [],
  myPlace: {},
  newPlace: false,
  categories: [],
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
    // gets the categories from the rest api
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };

    // gets the values returned by the rest api
    case GET_PLACE:
      leash = (action.data.details.indexOf('Laisse') >= 0);
      fountain = (action.data.details.indexOf('Fontaine') >= 0);
      bag = (action.data.details.indexOf('Sacs de déjections canines') >= 0);
      lake = (action.data.details.indexOf('lac à proximité') >= 0);
      place = {
        id: action.data.id,
        adress: action.data.adresse,
        comment: action.data.commentaire,
        name: action.data.title.rendered,
        category: state.categories[action.data.categories[0]].label,
        lat: action.data.lat,
        lng: action.data.lng,
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
          comment: action.data.comment,
          lat: action.data.lat,
          lng: action.data.lng,
          bag: action.data.bag,
          fountain: action.data.fountain,
          lake: action.data.lake,
          leash: action.data.leash,
        },
      };

    // change of an input
    case INPUT_MAP_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
        newPlace: false,
      };

    // new place submit
    case PLACE_SUBMIT: {
      return {
        ...state,
      };
    }

    // new place has been added
    case NEW_PLACE: {
      return {
        ...state,
        places: [...state.places, action.data],
        newPlace: true,
      };
    }

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
export const getCategories = data => ({
  type: GET_CATEGORIES,
  data,
});
export const getMyPlace = data => ({
  type: GET_MY_PLACE,
  data,
});
export const changeMapInput = ({ name, value }) => ({
  type: INPUT_MAP_CHANGE,
  value,
  name,
});
export const placeSubmit = () => ({
  type: PLACE_SUBMIT,
});
export const newPlace = data => ({
  type: NEW_PLACE,
  data,
});

/*
 * Export default
 */
export default reducer;
