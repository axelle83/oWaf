/*
 * Initial state
 */
const initialState = {
  members: [],
  errorpassword: false,
  dogSex: 'femelle',
  view: 'password',
  selectedFile: {},
  subscribe: false,
};

/*
* Types
*/
const INPUT_CHANGE = 'INPUT_CHANGE';
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT';
const LOAD_IMAGE = 'LOAD_IMAGE';
const SUBSCRIBE = 'SUBSCRIBE';

/*
* Code
*/

// const ids = initialState.members.map(obj => obj.id);
// let lastId = ids.length > 0 ? Math.max(...ids) : 0;

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

    case LOAD_IMAGE:
      return {
        ...state,
        selectedFile: action.value,
      };

    case SUBSCRIBE_SUBMIT: {
      if (state.password !== state.confirmpassword) {
        return {
          ...state,
          errorpassword: true,
        };
      }

      // Je retourne le nouveau state
      return {
        ...state,
        errorpassword: false,
      };
    }
    case SUBSCRIBE:
      console.log('subscribe');
      // console.log(state.pseudo);
      // console.log(state.password);
      return {
        ...state,
        subscribe: true,
      };
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
export const subscribe = () => ({
  type: SUBSCRIBE,
});
export const loadImage = value => ({
  type: LOAD_IMAGE,
  value,
});

export default reducer;
