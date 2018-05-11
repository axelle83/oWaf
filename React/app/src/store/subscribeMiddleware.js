/**
* Import
*/
import axios from 'axios';
import { SUBSCRIBE_SUBMIT, LOAD_IMAGE, subscribe } from './reducers/member';

/**
 * Code
 */

const urlUser = 'http://217.70.189.93/wp-json/wp/v2/users';
const urlDog = 'http://217.70.189.93/wp-json/wp/v2/dog';
const urlMedia = 'http://217.70.189.93/wp-json/wp/v2/media';

const subscribeMiddleware = store => next => (action) => {
  switch (action.type) {
    case SUBSCRIBE_SUBMIT: {
      const state = store.getState();
      const admin = btoa('restapi:restapi');
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
        },
      };
      axios
        .post(urlDog, {
          slug: state.member.dogName,
          title: state.member.dogName,
        }, config)
        .then((response) => {
          console.log('ok', response.data);
          axios
            .post(`${urlDog}/${response.data.id}`, {
              naiss: state.member.dogBirth,
              genre: state.member.dogSex,
            }, config)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
          // axios
          //   .post(urlUser, {
          //     username: state.member.pseudo,
          //     email: state.member.email,
          //     password: state.member.password,
          //     ville: state.member.city,
          //     dog_id: response.data.id,
          //   }, config)
          //   .then((res) => {
          //     console.log(res.data);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
          // store.dispatch(subscribe());
        })
        .catch((error) => {
          console.log('ko', error);
        });
      break;
    }
    case LOAD_IMAGE: {
      const formData = new FormData();
      console.log(action.value);
      formData.append('image', action.value, action.value.name);
      // formData.append('name', action.value.name);
      // formData.append('image', action.value);
      console.log(formData);
      const admin = btoa('restapi:restapi');
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
          'content-type': 'multipart/form-data',
        },
      };
      axios
        .post(urlMedia, action.value, config)
        .then((response) => {
          console.log('ok', response.data);
        })
        .catch((error) => {
          console.log('ko', error);
        });
      break;
    }

    default:
      break;
  }

  // Passe au suivant
  next(action);
};

/**
 * Export
 */
export default subscribeMiddleware;
