class DogUser < ApplicationRecord
  has_many :favorites
  has_many :candles, through: :favorites

  has_secure_password
end
