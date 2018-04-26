/*
 * InitialState
 */
const initialState = {
  openChat: false,
  openContact: false,
  username: 'anonyme',
};

/*
 * Types
 */
// Settings
const CHAT_TOGGLE = 'CHAT_TOGGLE';
const CONTACT_TOGGLE = 'CONTACT_TOGGLE';

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
// Settings
export const toggleChat = () => ({
  type: CHAT_TOGGLE,
});

export const toggleContact = () => ({
  type: CHAT_TOGGLE,
});

/*
 * Export
 */
export default reducer;
