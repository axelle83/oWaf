
/*
 * Types
 */
export const CONTACT_SUBMIT = 'CONTACT_SUBMIT';
export const CONTACT_CHANGE = 'CONTACT_CHANGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

/*
 * State
 */
const initialState = {
  send: false,
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
    case SEND_MESSAGE:
      return {
        ...state,
        send: true,
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
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
export const changeContact = ({ name, value }) => ({
  type: CONTACT_CHANGE,
  name,
  value,
});

export default reducer;
