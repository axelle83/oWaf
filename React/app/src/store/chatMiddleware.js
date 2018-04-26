
/**
 * Code
 */
import { receiveMessage } from './reducers/chatMessages';
import { SEND_MESSAGE } from './reducers/chatForm';

const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

let socket;

const chatMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket = window.io();
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });
      break;

    case SEND_MESSAGE: {
      const state = store.getState();

      const content = state.chatForm.input.trim();

      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      if (h < 10) h = `0${h}`;
      if (m < 10) m = `0${m}`;
      const date = `${h}:${m}`;

      if (content !== '') {
        const message = {
          username: state.buttons.username,
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
