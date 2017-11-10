Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createFood, function: Resolvers::CreateFood.new
  field :createChowdown, function: Resolvers::CreateChowdown.new

end
