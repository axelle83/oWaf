/*
 * Initial state
 */
const initialState = {
  members: [],
  errorpassword: false,
  dogSex: 'femelle',
  view: 'password',
  selectedFile: '',
  subscribe: false,
  logged: false,
};

/*
* Types
*/
const INPUT_CHANGE = 'INPUT_CHANGE';
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT';
export const PROFILE_SUBMIT = 'PROFILE_SUBMIT';
const LOAD_IMAGE = 'LOAD_IMAGE';
const SUBSCRIBE = 'SUBSCRIBE';
const GET_MEMBER = 'GET_MEMBER';

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
    // récupération des données du membre qui vient de se connecter
    case GET_MEMBER:
      console.log(action.data);
      return {
        ...state,
        pseudo: action.data.name,
        city: action.data.ville,
        // TODO autres données
        // email: action.data.mail,
      };

    // modif d'un input
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

    // submit du form d'inscription
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

    // submit du form de profil
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
