class CreateDogUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :dog_users do |t|
      t.string :name
      t.string :breed
      t.integer :age

      t.timestamps
    end
  end
end
