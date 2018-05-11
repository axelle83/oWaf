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

/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const Enhancer = applyMiddleware(
  chatMiddleware,
  subscribeMiddleware,
  mailMiddleware,
  loginMiddleware,
  postMiddleware,
);
const middlewares = compose(Enhancer, ...devTools);

// createStore
const store = createStore(reducers, middlewares);

/*
 * Export
 */
export default store;
