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
const PROFILE_CLOSE = 'PROFILE_CLOSE';
export const PROFILE_DELETE = 'PROFILE_DELETE';

/*
 * Initial state
 */
const initialState = {
  members: [],
  errorpassword: false,
  errorpass: false,
  exist: false,
  subscribe: false,
  profile: false,
  deleted: false,
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
        dogName: action.data.title.rendered,
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
        profile: false,
        errorpassword: false,
        errorpass: false,
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
      if (state.password.length < 6) {
        return {
          ...state,
          errorpass: true,
        };
      }
      return {
        ...state,
        errorpassword: false,
        errorpass: false,
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
      if (state.password.length < 6) {
        return {
          ...state,
          errorpass: true,
        };
      }
      return {
        ...state,
        errorpass: false,
        errorpassword: false,
        profile: true,
      };
    }

    // profile form close
    case PROFILE_CLOSE: {
      return {
        ...state,
        profile: false,
      };
    }

    // profile delete
    case PROFILE_DELETE: {
      return {
        initialState,
        deleted: true,
      };
    }

    // subscribe is finished
    case SUBSCRIBE:
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
export const profileClose = () => ({
  type: PROFILE_CLOSE,
});
export const profileDelete = () => ({
  type: PROFILE_DELETE,
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

/*
 * Export default
 */
export default reducer;
