Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :allFoods, !types[Types::FoodType] do
    resolve -> (obj, args, ctx) { Food.all }
  end

  field :allChowdowns, !types[Types::ChowdownType] do
    resolve -> (obj, args, ctx) { Chowdown.all }
  end
end
