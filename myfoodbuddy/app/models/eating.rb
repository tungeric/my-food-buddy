# == Schema Information
#
# Table name: eatings
#
#  id         :integer          not null, primary key
#  food_id    :integer          not null
#  meal_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Eating < ApplicationRecord
  validates :food_id, :meal_id, presence: true

  belongs_to :food
  belongs_to :meal
end
