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

require 'test_helper'

class EatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
