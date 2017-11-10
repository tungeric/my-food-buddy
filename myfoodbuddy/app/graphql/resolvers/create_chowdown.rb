class Resolvers::CreateChowdown < GraphQL::Function
  argument :food_id, !types.Int
  argument :chow_time, Types::DateTimeType

  type Types::ChowdownType

  def call(obj, args, ctx)
    chowdown = Chowdown.new(
      food_id: args[:food_id],
      chow_time: args[:chow_time],
      )
    if chowdown.save
      return chowdown
    else
      return GraphQL::ExecutionError.new("Invalid input: #{chowdown.errors.full_messages.join(', ')}")
    end
  rescue ActiveRecord::RecordInvalid => e
    GraphQL::ExecutionError.new("Invalid input: #{e.record.full_messages.join(', ')}")
  end
end