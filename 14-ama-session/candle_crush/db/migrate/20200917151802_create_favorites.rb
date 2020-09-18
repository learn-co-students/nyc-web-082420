class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.belongs_to :candle, null: false, foreign_key: true
      t.belongs_to :dog_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
