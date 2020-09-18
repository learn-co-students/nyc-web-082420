class Candle < ApplicationRecord
  has_many :favorites
  has_many :dog_users, through: :favorites

  #candle name is unique
  #candle price must be greater than 300 
  #candle price must be less than 1000 
  #candle scent cannot be longer than 10 char

  # validates :attribute, :helper_method {}
  validates :name, :scent, uniqueness: true
  validates :price, numericality: {greater_than: 300, less_than: 1000}
  validates :scent, length: {maximum: 10}

  validate :candle_can_not_be_named_greg

  def candle_can_not_be_named_greg
    if self.name.downcase == "greg"
      self.errors.add(:name, "Can not be me mr candle")
    end 
  end 

end
