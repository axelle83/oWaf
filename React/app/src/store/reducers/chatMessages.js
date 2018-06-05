/*
* Types
*/
const ADD_MESSAGE = 'ADD_MESSAGE';

/*
 * InitialState
 */
const initialState = {
  ids: [],
  list: {},
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // scroll down
      const node = document.getElementById('messages');
      setTimeout(() => {
        node.scrollTop = node.scrollHeight;
      }, 100);
      // adds the message to the messages list
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
 * Export default
 */
export default reducer;
