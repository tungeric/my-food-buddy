class CreateEatings < ActiveRecord::Migration[5.1]
  def change
    create_table :eatings do |t|
      t.integer :food_id, null: false
      t.integer :meal_id, null: false
      t.timestamps
    end
    add_index :eatings, :food_id
    add_index :eatings, :meal_id
  end
end
