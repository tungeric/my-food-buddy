# defines a new GraphQL type
Types::EatingsType = GraphQL::ObjectType.define do
  name 'Eatings'

  # it has the following fields
  field :id, !types.ID
  field :food_id, !types.Int
  field :meal_id, !types.Int
end