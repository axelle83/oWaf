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
import subscribeMiddleware from './subscribeMiddleware';
import mailMiddleware from './mailMiddleware';
import loginMiddleware from './loginMiddleware';
import postMiddleware from './postMiddleware';
import mapMiddleware from './mapMiddleware';
import localStorageMiddleware from './localStorageMiddleware';

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
  localStorageMiddleware,
  chatMiddleware,
  subscribeMiddleware,
  mailMiddleware,
  loginMiddleware,
  postMiddleware,
  mapMiddleware,
);
const middlewares = compose(Enhancer, ...devTools);

// Check if state exists in localStorage
const persistedState = localStorage.getItem('applicationState') ? JSON.parse(localStorage.getItem('applicationState')) : {};

// createStore
const store = createStore(reducers, persistedState, middlewares);

/*
 * Export
 */
export default store;
