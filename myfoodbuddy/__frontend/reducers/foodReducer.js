import { RECEIVE_FOOD, RECEIVE_FOODS } from '../actions/foodActions';
import { merge } from 'lodash/merge';

const foodReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOOD:
      const newState = merge({}, state);
      newState[action.food.id] = action.food;
      return newState;
    case RECEIVE_FOODS:
      return action.foods.allFoods;
    default:
      return state;
  }
};

export default foodReducer;