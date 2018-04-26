/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/*
 * Local import
 */
import App from 'src/components/App';
import store from 'src/store';

import { chatConnect } from 'src/store/chatMiddleware';

/*
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);


document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, document.getElementById('root'));

  store.dispatch(chatConnect());
});
