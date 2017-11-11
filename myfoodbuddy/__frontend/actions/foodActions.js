import * as FoodUtil from '../util/food_util';

export const RECEIVE_FOOD = 'RECEIVE_FOOD';
export const RECEIVE_FOODS = 'RECEIVE_FOODS';

export const receiveFood = (food) => ({
  type: RECEIVE_FOOD, 
  food,
});

export const receiveFoods = (foods) => ({
  type: RECEIVE_FOODS,
  foods,
});

export const getAllFoods = () => dispatch => {
  return FoodUtil.getAllFoods()
    .then ( response => dispatch(receiveFoods(response)));
};