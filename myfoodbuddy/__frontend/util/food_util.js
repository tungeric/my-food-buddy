import { request } from 'graphql-request';
const URL = "http://localhost:3000/graphql";

const getFoodsQuery = `{
  allFoods {
    name
    amount_g
    calories
    protein
    carbs
    fat
  }
}`;

export const getAllFoods = () => {
  return request(URL, getFoodsQuery);
};