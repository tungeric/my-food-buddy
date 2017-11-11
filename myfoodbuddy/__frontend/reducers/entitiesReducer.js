import { combineReducers } from 'redux';

import foodEntitiesReducer from './foodEntitiesReducer';

const entitiesReducer = combineReducers({
  food: foodEntitiesReducer,
});

export default entitiesReducer;
