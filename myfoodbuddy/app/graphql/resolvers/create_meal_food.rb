class Resolvers::CreateMealFood < GraphQL::Function
  argument :foodId, !types.ID
  argument :mealId, !types.ID

  type Types::MealFoodType

  def call(obj, args, ctx)
    mealfood = MealFood.new(
      food: Food.find_by(id: args[:foodId]),
      meal: Meal.find_by(id: args[:mealId]),
    )
    if mealfood.save
      return mealfood
    else
      return GraphQL::ExecutionError.new("Invalid input: #{mealfood.errors.full_messages.join(', ')}")
    end
  rescue ActiveRecord::RecordInvalid => e
    GraphQL::ExecutionError.new("Invalid input: #{e.record.full_messages.join(', ')}")
  end
end