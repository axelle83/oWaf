
const localStorageMiddleware = (store) => {
  return next => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(store.getState()));
    return result;
  };
};

/**
 * Export
 */
export default localStorageMiddleware;
