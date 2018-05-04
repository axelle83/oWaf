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

/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const exampleEnhancer = applyMiddleware(chatMiddleware, memberMiddleware, mailMiddleware);
const middlewares = compose(exampleEnhancer, ...devTools);

// createStore
const store = createStore(reducers, middlewares);

/*
 * Export
 */
export default store;
