
/*
 * Types
 */
export const LOAD_POST = 'LOAD_POST';
export const GET_POST = 'GET_POST';

/*
 * State
 */
const initialState = {
  title1: '',
  category1: '',
  excerpt1: '',
  title2: '',
  category2: '',
  excerpt2: '',
  title3: '',
  category3: '',
  excerpt3: '',
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // gets the posts from the rest api
    case LOAD_POST:
      return {
        ...state,
      };

      // gets the values returned by the rest api
    case GET_POST:
      return {
        title1: action.data[0].title.rendered,
        title2: action.data[1].title.rendered,
        title3: action.data[2].title.rendered,
        category1: action.data[0].categories[0],
        category2: action.data[1].categories[0],
        category3: action.data[2].categories[0],
        excerpt1: action.data[0].excerpt.rendered,
        excerpt2: action.data[1].excerpt.rendered,
        excerpt3: action.data[2].excerpt.rendered,
      };

    // default case
    default:
      return state;
  }
};

/*
 * Action creators
 */
export const loadPost = () => ({
  type: LOAD_POST,
});
export const getPost = data => ({
  type: GET_POST,
  data,
});

/*
 * Export default
 */
export default reducer;
