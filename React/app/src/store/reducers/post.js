
/*
 * Types
 */
export const GET_POST = 'GET_POST';
/*
 * State
 */
const initialState = {
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POST:
      console.log('post');
      return {
        ...state,
      };
    default:
      return state;
  }
};

/*
 * Action creators
 */
export const getPost = () => ({
  type: GET_POST,
});

export default reducer;
