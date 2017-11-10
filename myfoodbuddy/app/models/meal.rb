# == Schema Information
#
# Table name: meals
#
#  id         :integer          not null, primary key
#  name       :string
#  meal_time  :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Meal < ApplicationRecord
  validates :name, presence: true
  before_create :ensure_meal_time

  has_many :eatings
  has_many :foods, :through => :eatings

  def ensure_meal_time
    self.meal_time ||= Time.now
  end
end
