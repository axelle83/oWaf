/*
 * Initial state
 */
const initialState = {
  members: [],
  errorpassword: false,
  'dog-sex': 'femelle',
  view: 'password',
};

/*
* Types
*/
const INPUT_CHANGE = 'INPUT_CHANGE';
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

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
      if (state.password !== state.confirmpassword) {
        return {
          ...state,
          errorpassword: true,
        };
      }
      // ID
      lastId += 1;

      // On crée l'objet membre
      const member = {
        id: lastId,
        username: state.pseudo,
        city: state.city,
        email: state.email,
        password: state.password,
      };
      // Je retourne le nouveau state
      return {
        ...state,
        errorpassword: false,
        members: [...state.members, member],
      };
    }

    case LOGIN_SUBMIT: {
      console.log('login');
      // Je retourne le nouveau state
      return {
        ...state,
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
export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export default reducer;
