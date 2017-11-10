# defines a new GraphQL type
Types::MealFoodType = GraphQL::ObjectType.define do
  name 'MealFood'

  # it has the following fields
  field :id, !types.ID
  field :food, -> { Types::FoodType }
  field :meal, -> { Types::MealType }
end