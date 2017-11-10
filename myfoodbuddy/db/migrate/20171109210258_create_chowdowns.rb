class CreateChowdowns < ActiveRecord::Migration[5.1]
  def change
    create_table :chowdowns do |t|
      t.integer :food_id, null: false
      t.datetime :chow_time

      t.timestamps
    end
    add_index :chowdowns, :food_id
  end
end
