class DogUser < ApplicationRecord
  has_many :favorites
  has_many :candles, through: :favorites
end
