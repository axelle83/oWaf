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
  logged: false,
  pseudo: '',
  city: '',
  id: '',
  email: '',
};

/*
* Types
*/
const INPUT_CHANGE = 'INPUT_CHANGE';
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT';
export const PROFILE_SUBMIT = 'PROFILE_SUBMIT';
export const LOAD_IMAGE = 'LOAD_IMAGE';
const SUBSCRIBE = 'SUBSCRIBE';
const GET_MEMBER = 'GET_MEMBER';

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // gets the data of the connected member
    case GET_MEMBER:
      return {
        ...state,
        pseudo: action.data.slug,
        city: action.data.ville,
        id: action.data.id,
        email: action.data.email,
        // TODO autres données
      };

    // change of an input
    case INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case LOAD_IMAGE:
      return {
        ...state,
      };

    // subscibe form submit
    case SUBSCRIBE_SUBMIT: {
      if (state.password !== state.confirmpassword) {
        return {
          ...state,
          errorpassword: true,
        };
      }
      return {
        ...state,
        errorpassword: false,
      };
    }

    // profile form submit
    case PROFILE_SUBMIT: {
      if (state.password !== state.confirmpassword) {
        return {
          ...state,
          errorpassword: true,
        };
      }
      console.log('profile');
      return {
        ...state,
        errorpassword: false,
      };
    }
    case SUBSCRIBE:
      console.log('subscribe');
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
export const profileSubmit = () => ({
  type: PROFILE_SUBMIT,
});
export const subscribe = () => ({
  type: SUBSCRIBE,
});
export const loadImage = value => ({
  type: LOAD_IMAGE,
  value,
});
export const getMember = data => ({
  type: GET_MEMBER,
  data,
});

export default reducer;
