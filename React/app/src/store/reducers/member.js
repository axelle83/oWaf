/*
 * Initial state
 */
const initialState = {
  members: [],
  errorpassword: false,
  exist: false,
  subscribe: false,
  view: 'password',
  pseudo: '',
  city: '',
  id: '',
  email: '',
  dogName: '',
  dogGender: 'femelle',
  dogBirth: '',
  selectedFile: {},
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
const GET_DOG = 'GET_DOG';
const USER_EXIST = 'USER_EXIST';

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // gets the data of the connected member
    case GET_MEMBER:
      return {
        ...state,
        id: action.data.id,
        pseudo: action.data.slug,
        email: action.data.user_email,
        city: action.data.ville,
      };

    // gets the dog data of the connected member
    case GET_DOG:
      return {
        ...state,
        dogId: action.data.id,
        dogName: action.data.slug,
        dogBirth: action.data.naiss,
        dogGender: action.data.genre,
      };

    // user exists (pseudo or email)
    case USER_EXIST:
      return {
        ...state,
        exist: true,
      };

    // change of an input
    case INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
        exist: false,
      };

    case LOAD_IMAGE:
      return {
        ...state,
      };

    // subscribe form submit
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

    // subscribe is finished
    case SUBSCRIBE:
      console.log('subscribe');
      return {
        ...state,
        subscribe: true,
      };

    // default case
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
export const subscribeSubmit = () => ({
  type: SUBSCRIBE_SUBMIT,
});
export const profileSubmit = () => ({
  type: PROFILE_SUBMIT,
});
export const subscribe = () => ({
  type: SUBSCRIBE,
});
export const userExists = () => ({
  type: USER_EXIST,
});
export const loadImage = value => ({
  type: LOAD_IMAGE,
  value,
});
export const getMember = data => ({
  type: GET_MEMBER,
  data,
});
export const getDog = data => ({
  type: GET_DOG,
  data,
});

export default reducer;
