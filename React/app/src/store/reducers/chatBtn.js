/*
 * InitialState
 */
const initialState = {
  openChat: false,
  username: 'anonyme',
};

/*
 * Types
 */
// Settings
const CHAT_TOGGLE = 'CHAT_TOGGLE';

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

/*
 * Export
 */
export default reducer;
