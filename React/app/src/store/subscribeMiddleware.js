/**
* Import
*/
import axios from 'axios';
import { SUBSCRIBE_SUBMIT, LOAD_IMAGE, subscribe, userExists } from './reducers/member';

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
      // test if email exists in the db
      axios
        .get(`${urlUser}/?search=${state.member.email}`, config)
        .then((res) => {
          if (res.data.length > 0) {
            store.dispatch(userExists());
          }
          else {
            // test if pseudo exists in the db
            axios
              .get(`${urlUser}/?search=${state.member.pseudo}`, config)
              .then((res) => {
                if (res.data.length > 0) {
                  store.dispatch(userExists());
                }
                else {
                  axios
                  // creates dog in the db
                    .post(urlDog, {
                      slug: state.member.dogName,
                      title: state.member.dogName,
                      naiss: state.member.dogBirth,
                      genre: state.member.dogSex,
                      status: 'publish',
                    }, config)
                    .then((response) => {
                      console.log('ok', response.data.id);
                      // axios
                      //   .post(`${urlDog}/${response.data.id}`, {
                      //   }, config)
                      //   .then((res) => {
                      //     console.log(res);
                      //   })
                      //   .catch((error) => {
                      //     console.log(error);
                      //   });
                      axios
                        // creates user in the db
                        .post(urlUser, {
                          username: state.member.pseudo,
                          last_name: state.member.pseudo,
                          email: state.member.email,
                          password: state.member.password,
                          meta: {
                            ville: state.member.city,
                          },
                          ville: state.member.city,
                          // dog_id: response.data.id,
                        }, config)
                        .then((res) => {
                          console.log(res.data);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                      store.dispatch(subscribe());
                    })
                    .catch((error) => {
                      console.log('ko', error);
                  });

                }
              });
          }
        });
      break;
    }
    case LOAD_IMAGE: {
      // const formData = new FormData();
      // formData.append('image', action.value, action.value.name);
      // formData.append('name', action.value.name);
      // formData.append('image', action.value);
      // console.log(formData);
      console.log(action.value.name);
      const admin = btoa('restapi:restapi');
      const file = btoa(`${action.value.name}`);
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
          'content-type': false,
        },
      };
      axios
        .post(urlMedia, file, config)
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
