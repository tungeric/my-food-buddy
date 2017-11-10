# defines a new GraphQL type
Types::ChowdownType = GraphQL::ObjectType.define do
  name 'Chowdown'

  # it has the following fields
  field :id, !types.ID
  field :food_id, !types.Int
  field :chow_time, !Types::DateTimeType
end