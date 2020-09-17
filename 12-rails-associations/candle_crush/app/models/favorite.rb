class Favorite < ApplicationRecord
  belongs_to :candle
  belongs_to :dog_user
end
