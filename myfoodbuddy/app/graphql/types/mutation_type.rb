Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createFood, function: Resolvers::CreateFood.new

end
