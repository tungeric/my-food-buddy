import { RECEIVE_FOOD, RECEIVE_FOODS } from '../actions/foodActions';
import { arrayToObj } from './shapers';

const foodEntitiesReducer = (state={}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  const { foods, food } = action;

  switch(action.type) {
    case RECEIVE_FOOD:
      newState[food.id] = food;
      return newState;
    case RECEIVE_FOODS:
      return Object.assign(newState, arrayToObj(foods));
    default:
      return state;
  }
};

export default foodEntitiesReducer;