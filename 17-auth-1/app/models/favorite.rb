class Favorite < ApplicationRecord
  belongs_to :candle
  belongs_to :dog_user

  # can only favorite one candle once
  validates :candle_id, uniqueness: {scope: :dog_user_id}
end
