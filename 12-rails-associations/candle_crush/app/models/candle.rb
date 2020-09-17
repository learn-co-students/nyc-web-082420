class Candle < ApplicationRecord
  has_many :favorites
  has_many :dog_users, through: :favorites
end
