
const sessionStorageMiddleware = (store) => {
  return next => (action) => {
    const result = next(action);
    sessionStorage.setItem('applicationState', JSON.stringify(store.getState()));
    return result;
  };
};

/**
 * Export
 */
export default sessionStorageMiddleware;
