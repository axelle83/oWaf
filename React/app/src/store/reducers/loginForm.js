
/*
 * Types
 */
const CHANGE_VIEW = 'CHANGE_VIEW';
const INPUT_CHANGE = 'INPUT_CHANGE';

/*
 * State
 */
const initialState = {
  view: 'login',
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.view,
      };

    case INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

/*
 * Action creators
 */
export const changeView = view => ({
  type: CHANGE_VIEW,
  view,
});
export const changeInput = ({ name, value }) => ({
  type: INPUT_CHANGE,
  name,
  value,
});

export default reducer;
