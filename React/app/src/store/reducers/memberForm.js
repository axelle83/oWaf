/*
 * Initial state
 */
const initialState = {
  pseudo: '',
  members: [],
};

/*
* Types
*/
const INPUT_CHANGE = 'INPUT_CHANGE';
const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT';

/*
* Code
*/

const ids = initialState.members.map(obj => obj.id);
let lastId = ids.length > 0 ? Math.max(...ids) : 0;

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SUBSCRIBE_SUBMIT: {
      // ID
      lastId += 1;

      // On crée l'objet tâche
      const member = {
        id: lastId,
        label: state.input,
        done: false,
        favorite: false,
      };

      // Je retourne le nouveau state
      return {
        ...state,
        members: [...state.members, member],
      };
    }


    default:
      return state;
  }
};


/*
 * Action creators
 */
export const changeInput = ({ name, value }) => ({
  type: INPUT_CHANGE,
  value,
  name,
});
export const subscribeSubmit = id => ({
  type: SUBSCRIBE_SUBMIT,
  id,
});

export default reducer;
