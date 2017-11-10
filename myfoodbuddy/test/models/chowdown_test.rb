# == Schema Information
#
# Table name: chowdowns
#
#  id         :integer          not null, primary key
#  food_id    :integer          not null
#  chow_time  :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ChowdownTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
