
/*
 * Types
 */
export const CONTACT_SUBMIT = 'CONTACT_SUBMIT';
export const CONTACT_CHANGE = 'CONTACT_CHANGE';

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
    case CONTACT_SUBMIT:
      return {
        ...state,
      };

    case CONTACT_CHANGE:
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
export const contactSubmit = () => ({
  type: CONTACT_SUBMIT,
});
export const changeContact = ({ name, value }) => ({
  type: CONTACT_CHANGE,
  name,
  value,
});

export default reducer;
