/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/*
 * Local import
 */
import App from 'src/components/App';
import store from 'src/store';

import { chatConnect } from 'src/store/chatMiddleware';

/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  render(rootComponent, document.getElementById('root'));

  store.dispatch(chatConnect());
  localStorage.setItem('applicationState', JSON.stringify(store.getState()));
});
