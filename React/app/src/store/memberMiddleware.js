/*
* Import
*/
import axios from 'axios';
import { SUBSCRIBE_SUBMIT, PROFILE_SUBMIT, PROFILE_DELETE, subscribe, userExists } from './reducers/member';

/*
 * Code
 */
const urlUser = 'http://217.70.189.93/blog/wp-json/wp/v2/users';
const urlDog = 'http://217.70.189.93/blog/wp-json/wp/v2/dog';

const memberMiddleware = store => next => (action) => {
  switch (action.type) {
    case SUBSCRIBE_SUBMIT: {
      const state = store.getState();
      const admin = btoa('restapi:restapi');
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
        },
      };

      if (state.member.password === state.member.confirmpassword && state.member.password.length >= 6) {
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
                .then((resp) => {
                  if (resp.data.length > 0) {
                    store.dispatch(userExists());
                  }
                  else {
                    axios
                    // creates dog in the db
                      .post(urlDog, {
                        slug: state.member.dogName,
                        title: state.member.dogName,
                        naiss: state.member.dogBirth,
                        genre: state.member.dogGender,
                        status: 'publish',
                      }, config)
                      .then((response) => {
                        axios
                          // creates user in the db
                          .post(urlUser, {
                            username: state.member.pseudo,
                            last_name: state.member.pseudo,
                            email: state.member.email,
                            password: state.member.password,
                            ville: state.member.city,
                            dog_id: response.data.id,
                          }, config)
                          .then((respons) => {
                            console.log(respons.data);
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
      }
      break;
    }

    case PROFILE_SUBMIT: {
      const state = store.getState();
      const admin = btoa('restapi:restapi');
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
        },
      };
      if (state.member.password === state.member.confirmpassword && state.member.password.length >= 6) {
        // updates user in the db
        axios
          .post(`${urlUser}/${state.member.id}`, {
            ville: state.member.city,
            password: state.member.password,
            email: state.member.email,
          }, config)
          .then((response) => {
            console.log(response);
          });
        // updates dog in the db
        axios
          .post(`${urlDog}/${state.member.dogId}`, {
            title: state.member.dogName,
            slug: state.member.dogName,
            naiss: state.member.dogBirth,
            genre: state.member.dogGender,
          }, config)
          .then((response) => {
            console.log(response);
          });
      }
      break;
    }

    case PROFILE_DELETE: {
      const state = store.getState();
      const admin = btoa('restapi:restapi');
      const config = {
        headers: {
          Authorization: `Basic ${admin}`,
          'content-type': 'application/json',
        },
      };
      // deletes user in the db
      axios
        .delete(`${urlUser}/${state.member.id}?force=true&reassign=1`, config)
        .then(() => {
          // if correct then deletes dog in the db
          axios
            .delete(`${urlDog}/${state.member.dogId}?force=true&reassign=1`, config)
            .then((res) => {
              console.log(res);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    }

    default:
      break;
  }

  // next
  next(action);
};

/*
 * Export default
 */
export default memberMiddleware;
