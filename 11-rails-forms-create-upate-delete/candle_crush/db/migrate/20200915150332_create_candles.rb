class CreateCandles < ActiveRecord::Migration[6.0]
  def change
    create_table :candles do |t|
      t.string :name
      t.string :scent
      t.integer :price
      t.string :img_url

      t.timestamps
    end
  end
end
