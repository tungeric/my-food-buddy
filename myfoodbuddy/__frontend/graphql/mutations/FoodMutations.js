import { gql } from 'react-apollo';

export const CREATE_FOOD_MUTATION = gql`
mutation CreateFoodMutation($name: String!, $amount_g: Int!, calories: Int, protein: Int, carbs: Int, fat: Int) {
  createFood(
    name: $name
    amount_g: $amount_g
    calories: $calories
    protein: $protein
    carbs: $carbs
    fat: $fat
  ) {
    id
    name
    amount_g
    calories
    protein
    carbs
    fat
  }
}
`;