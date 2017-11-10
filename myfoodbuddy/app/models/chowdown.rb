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

class Chowdown < ApplicationRecord
  before_create :set_chow_time_to_now

  def set_chow_time_to_now
    self.chow_time ||= Time.now
  end

end
