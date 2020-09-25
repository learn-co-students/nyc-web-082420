class DogUser < ApplicationRecord
  has_many :favorites
  has_many :candles, through: :favorites
  validates :name, uniqueness: true, presence: true

  has_secure_password#, validations: false
  # password must exist
  # if password_confirmation exists, it must match password
end
