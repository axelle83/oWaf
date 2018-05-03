
/**
 * Code
 */
import { receiveMessage } from './reducers/chatMessages';
import { SEND_MESSAGE } from './reducers/chatForm';

const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

let socket;

/* eslint-disable-next-line */
const io = require('socket.io-client');

const chatMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket = io('http://localhost:3000/');
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });
      break;

    case SEND_MESSAGE: {
      const state = store.getState();

      const content = state.chatForm.input.trim();

      const day = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      if (h < 10) h = `0${h}`;
      if (m < 10) m = `0${m}`;
      const date = `${day[now.getDay()]} ${now.getDate()} ${month[now.getMonth()]} ${now.getFullYear()} - ${h}:${m}`;

      if (content !== '') {
        const message = {
          username: state.loginForm.pseudo,
          content,
          date,
        };
        socket.emit('send_message', message);
      }
    }
      break;

    default:
      break;
  }

  // Passe au suivant
  next(action);
};

export const chatConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

/**
 * Export
 */
export default chatMiddleware;
