# defines a new GraphQL type
Types::MealType = GraphQL::ObjectType.define do
  name 'Meal'

  # it has the following fields
  field :id, !types.ID
  field :name, types.String
  field :meal_time, !Types::DateTimeType
end