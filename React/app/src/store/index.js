/*
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/*
 * Local import
 */
// Reducer
import reducers from './reducers';

// Middleware
import chatMiddleware from './chatMiddleware';
import memberMiddleware from './memberMiddleware';
import mailMiddleware from './mailMiddleware';
import loginMiddleware from './loginMiddleware';
import postMiddleware from './postMiddleware';
import mapMiddleware from './mapMiddleware';
import sessionStorageMiddleware from './sessionStorageMiddleware';

/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware -> Enhancers
const Enhancer = applyMiddleware(
  sessionStorageMiddleware,
  chatMiddleware,
  memberMiddleware,
  mailMiddleware,
  loginMiddleware,
  postMiddleware,
  mapMiddleware,
);
const middlewares = compose(Enhancer, ...devTools);

// Check if state exists in localStorage
const persistedState = sessionStorage.getItem('applicationState') ? JSON.parse(sessionStorage.getItem('applicationState')) : {};

// createStore
const store = createStore(reducers, persistedState, middlewares);

/*
 * Export
 */
export default store;
