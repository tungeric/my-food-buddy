export const RECEIVE_FOODS = 'RECEIVE_FOODS';
export const RECEIVE_FOOD = 'RECEIVE_FOOD';

export const receiveFood = (food) => ({
  type: RECEIVE_FOOD,
  food
});

export const receiveFoods = (foods) => ({
  type: RECEIVE_FOODS,
  foods
});