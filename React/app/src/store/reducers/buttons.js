/*
* Types
*/
const CHAT_TOGGLE = 'CHAT_TOGGLE';
const CONTACT_TOGGLE = 'CONTACT_TOGGLE';
const LOGIN_TOGGLE = 'LOGIN_TOGGLE';

/*
 * InitialState
 */
const initialState = {
  openChat: false,
  openContact: false,
  openlogin: false,
  username: 'anonyme',
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Settings
    case CHAT_TOGGLE:
      return {
        ...state,
        openChat: !state.openChat,
      };
    case LOGIN_TOGGLE:
      return {
        ...state,
        openLogin: !state.openLogin,
      };
    case CONTACT_TOGGLE:
      return {
        ...state,
        openContact: !state.openContact,
      };
    default:
      return state;
  }
};

/*
 * actionCreators
 */
export const toggleChat = () => ({
  type: CHAT_TOGGLE,
});

export const toggleContact = () => ({
  type: CONTACT_TOGGLE,
});

export const toggleLogin = () => ({
  type: LOGIN_TOGGLE,
});

/*
 * Export default
 */
export default reducer;
