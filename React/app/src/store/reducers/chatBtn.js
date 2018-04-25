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
const SETTINGS_TOGGLE = 'SETTINGS_TOGGLE';

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Settings
    case SETTINGS_TOGGLE:
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
  type: SETTINGS_TOGGLE,
});

/*
 * Export
 */
export default reducer;
