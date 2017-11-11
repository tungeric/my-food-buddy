import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    applyMiddleware(thunk) //and logger!
  )
);

export default configureStore;
