/*
 * InitialState
 */
const initialState = {
  ids: [],
  list: {},
};

/*
 * Types
 */
const ADD_MESSAGE = 'ADD_MESSAGE';

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // on descend le scroll du chat
      const node = document.getElementById('messages');
      setTimeout(() => {
        node.scrollTop = node.scrollHeight;
      }, 100);
      return {
        ...state,
        ids: [...state.ids, action.message.id],
        list: {
          ...state.list,
          [action.message.id]: action.message,
        },
      };
    }

    default:
      return state;
  }
};

/*
 * actionCreators
 */
export const receiveMessage = message => ({
  type: ADD_MESSAGE,
  message,
});

/*
 * Export
 */
export default reducer;
